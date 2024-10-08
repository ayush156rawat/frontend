import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Registerpage(){
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    
    async function RegisterUser(ev) {
        ev.preventDefault();
        // try{
            await axios.post('/register', {
                name,
                email,
                password,
        });
        alert('registration complete');
        // }catch(e){
            // alert('registration failed');
    // }
    };

    return (
        <div className="mt-[110px] grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-2xl mx-auto border" onSubmit={RegisterUser}>
                    <input type="text" 
                        placeholder="John Deph" 
                        value={name}
                        onChange={ev =>setName(ev.target.value)}/>
                    <input type="email" 
                        placeholder="your@email.com"
                        value={email}
                        onChange={ev =>setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="password" 
                        value={password}
                        onChange={ev =>setPassword(ev.target.value)}/>
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};
