import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';



  return (
    // <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
    //   <h1 className="text-3xl">{place.title}</h1>
    //   <AddressLink>{place.address}</AddressLink>
    //   <PlaceGallery place={place} />
    //   <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
    //     <div>
    //       <div className="my-4">
    //         <h2 className="font-semibold text-2xl">Description</h2>
    //         {place.description}
    //       </div>
    //       Check-in: {place.checkIn}<br />
    //       Check-out: {place.checkOut}<br />
    //       Max number of guests: {place.maxGuests}
    //     </div>
    //     <div>
    //       <BookingWidget place={place} />
    //     </div>
    //   </div>
    //   <div className="bg-white -mx-8 px-8 py-8 border-t">
    //     <div>
    //       <h2 className="font-semibold text-2xl">Extra info</h2>
    //     </div>
    //     <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
    //   </div>
    // </div>

    <div className="mt-8 bg-gray-50 px-4 sm:px-8 py-8 rounded-lg shadow-md">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{place.title}</h1>
  <AddressLink className="text-lg text-gray-600">{place.address}</AddressLink>
  
  <PlaceGallery place={place} className="mt-4" />
  
  <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-2">
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-700">{place.description}</p>
      </div>
      
      <div className="text-gray-700">
        <p className="mb-1"><strong>Check-in:</strong> {place.checkIn}</p>
        <p className="mb-1"><strong>Check-out:</strong> {place.checkOut}</p>
        <p><strong>Max number of guests:</strong> {place.maxGuests}</p>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <BookingWidget place={place} />
    </div>
  </div>
  
  <div className="bg-white px-6 py-8 border-t border-gray-200 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Extra Info</h2>
    <p className="text-gray-700 text-sm leading-relaxed">{place.extraInfo}</p>
  </div>
</div>



  );
}