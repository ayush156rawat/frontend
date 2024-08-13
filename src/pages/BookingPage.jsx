// import {useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axios from "axios";
// import AddressLink from "../AddressLink";
// import PlaceGallery from "../PlaceGallery";
// import BookingDates from "../BookingDates";

// export default function BookingPage() {
//   const {id} = useParams();
//   const [booking,setBooking] = useState(null);
//   useEffect(() => {
//     if (id) {
//       axios.get('/bookings').then(response => {
//         const foundBooking = response.data.find(({_id}) => _id === id);
//         if (foundBooking) {
//           setBooking(foundBooking);
//         }
//       });
//     }
//   }, [id]);

//   if (!booking) {
//     return '';
//   }

//   return (
//     <div className="my-8">
//       <h1 className="text-3xl">{booking.place.title}</h1>
//       <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
//       <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl mb-4">Your booking information:</h2>
//           <BookingDates booking={booking} />
//         </div>
//         <div className="bg-primary p-6 text-white rounded-2xl">
//           <div>Total price</div>
//           <div className="text-3xl">${booking.price}</div>
//         </div>
//       </div>
//       <PlaceGallery place={booking.place} />
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get('/bookings').then(response => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{booking.place.title}</h1>
      <AddressLink className="text-gray-600 mb-4 block">{booking.place.address}</AddressLink>
      
      <div className="bg-gray-100 p-6 mb-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between shadow-md">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Your Booking Information:</h2>
          <BookingDates booking={booking} />
        </div>
        <div className="bg-primary p-6 text-white rounded-lg shadow-md">
          <div className="text-lg font-medium">Total Price</div>
          <div className="text-3xl font-bold">${booking.price}</div>
        </div>
      </div>
      
      <PlaceGallery place={booking.place} />
    </div>
  );
}
