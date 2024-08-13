// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import About from "../Components/About";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);


//   useEffect(() => {
//     axios.get('/places').then(response => {
//       setPlaces(response.data);
//     });
//   }, []);

//   return ( 
//     <div>
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:m-[30px]">
//         {places.length > 0 && places.map(place => (
//           <Link to={`/place/${place._id}`} key={place._id} className="group relative block rounded-2xl w-[350px] overflow-hidden bg-gray-100 shadow-lg  transition-transform transform hover:scale-105">
//             <div className="relative h-64 ">
//               {place.photos?.[0] && (
//                 <img className="w-full h-full object-cover rounded-t-2xl" src={`http://localhost:3000/uploads/${place.photos[0]}`} alt={place.title} />
//               )}
//             </div>
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800">{place.address}</h2>
//               <h3 className="text-sm text-gray-500">{place.title}</h3>
//               <div className="mt-2 flex items-baseline text-gray-700">
//                 <span className="text-xl font-bold">${place.price}</span>
//                 <span className="ml-1 text-sm text-gray-500">per night</span>
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
//           </Link>
//         ))}
//       </div>
//       <About/>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "../Components/About";
import NorContent from "../Components/NorContent";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);


  return (
      <div>

    <div>
      <NorContent />
    <div>
    <h1 className="text-center text-3xl font-bold mb-8">Tours Packages</h1>
    <p className="text-center text-xl mb-8">Planning for a trip? We will organize your trip with the best places and within <br/> best budget!</p>
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-[30px]">
        {places.length > 0 && places.map(place => (
          <Link 
          to={`/place/${place._id}`} 
          key={place._id} 
          className="group relative block rounded-2xl overflow-hidden bg-gray-100 shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative h-64">
              {place.photos?.[0] && (
                <img 
                className="w-full h-full object-cover rounded-t-2xl" 
                src={`http://localhost:3000/uploads/${place.photos[0]}`} 
                alt={place.title} 
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{place.address}</h2>
              <h3 className="text-sm text-gray-500">{place.title}</h3>
              <div className="mt-2 flex items-baseline text-gray-700">
                <span className="text-xl font-bold">${place.price}</span>
                <span className="ml-1 text-sm text-gray-500">per night</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </Link>
        ))}
      </div>
    </div>
      <About />
    </div>
    <div className="mt-[80px]">
    <h1 className="text-center text-3xl font-bold mb-8">What Our Users Say</h1>
    <p className="text-center text-xl mb-8">This is just a simple text made for this unique and awesome template, you <br/> can replace it with any text.</p>
    </div>


        

        </div>
  );
}
