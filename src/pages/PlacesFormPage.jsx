import axios from "axios";
import { useState, useEffect } from "react";
import Perks from "../Perks"
import PhotoUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage(){
    const {id}=useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuest, setMaxGuest] = useState(1);
    const [price,setPrice] = useState(1000);
    const [redirect,setRedirect] = useState(false)

    useEffect(() =>{
        if (!id){
            return;
        }
        axios.get('/places/'+id).then(response => {
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuest(data.maxGuest);
            setPrice(data.price);
        });
    },[id])

    function inputHeader(text){
        return(
            <h2 className="text-xl mt-4">{text}</h2>
        );};
    
    function inputDescription(text){
        return(
            <p className="text-gray-500">{text}</p>
        )
    }

    function preInput(header,description) {
        return(
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev){
        ev.preventDefault();
        const placeData = {title, address, addedPhotos, description, perks, extraInfo,checkIn, checkOut, maxGuest,price}
        if (id){
            //update
            await axios.put('/places',{id,...placeData});
            setRedirect(true);
        }else{
            //new place 
            await axios.post('/places',{placeData});
            setRedirect(true);
        }  
    };

    if(redirect){
        return <Navigate to={'/account/places'} />
    }

    return(
        <div>
            <AccountNav />
                <form onSubmit={savePlace}>
                    {preInput('Title','Title for your place, should be short')}
                    <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My Lovely Apartment " />
                    {preInput('Address','Address to this place')}
                    <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="Address"/>
                    {preInput('Photos','More = Better')}
                    <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                    {preInput('Description','Description of the place')}
                    <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
                    {preInput('Perks','Select all the Perks of your Place')}
                    <div className="mt-2 grid gap-2 grid-cols-2 lg:grid-cols-6 md:grid-cols-3">
                        <Perks selected={perks} onChange={setPerks}/>
                    </div>
                    {preInput('Extra Info.','House Rules, etc')}
                    <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
                    <h2 className="text-2xl mt-4">Check In&Out Times</h2>
                    <p className="text-gray-500 text-sm">Add Check In and Out time, remember to have some time window for cleaning the room between guests</p>
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                        <div >
                            <h3 className="mt-2 -mb-1">Start Date</h3>
                            <input type="text" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} placeholder="14:00"/>
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">End date</h3>
                            <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} placeholder="11:00"/>
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Number Of Guest</h3>
                            <input type="number" value={maxGuest} onChange={ev => setMaxGuest(ev.target.value)}/>
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">price</h3>
                            <input type="number" value={price} onChange={ev => setPrice(ev.target.value)}/>
                        </div>
                    </div>    
                    <div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 my-4">Save</button>
                    </div>           
                </form>
            </div>
    );
}