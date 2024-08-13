import AccountNav from "../AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import {Link} from "react-router-dom";
import BookingDates from "../BookingDates";

export default function BookingsPage() {
  const [bookings,setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);
  return (
    // <div className="py-3">
    //   <AccountNav />
    //   <div className="">
    //     {bookings?.length > 0 && bookings.map((booking,index) => (
    //       <Link to={`/account/bookings/${booking._id}`} key={index} className="shrink-0  flex gap-4 bg-gray-200 rounded-2xl overflow-hidden ">
    //         <div className="w-48">
    //           <PlaceImg place={booking.place} className="shrink-0 grow-0"/>
    //         </div>
    //         <div className="py-3 pr-3 grow">
    //           <h2 className="text-xl">{booking.place.title}</h2>
    //           <div className="text-xl">
    //             <BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
    //             <div className="flex gap-1">
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    //               </svg>
    //               <span className="text-2xl">
    //                 Total price: ${booking.price}
    //               </span>
    //               {/* <div className="grow-0 shrink">
    //                 <h2 className="text-xl">Description</h2>
    //                 <p className="text-sm mt-2">{booking.place.description}</p>
    //             </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>

    <div className="py-3">
  <AccountNav />
  <div className="mt-4">
    {bookings?.length > 0 ? (
      bookings.map((booking, index) => (
        <Link 
          to={`/account/bookings/${booking._id}`} 
          key={index} 
          className="flex gap-4 bg-white shadow-lg rounded-2xl overflow-hidden mb-6 border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="w-48 h-48">
            <PlaceImg place={booking.place} className="w-full h-full object-cover"/>
          </div>
          <div className="py-4 px-6 grow">
            <h2 className="text-2xl font-semibold mb-2">{booking.place.title}</h2>
            <BookingDates booking={booking} className="text-gray-500 mb-4" />
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <span className="text-xl font-medium">
                Total price: ${booking.price}
              </span>
            </div>
          </div>
        </Link>
      ))
    ) : (
      <p className="text-center text-gray-500">No bookings found.</p>
    )}
  </div>
</div>



  );
}