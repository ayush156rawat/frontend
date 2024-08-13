import React from 'react';

const About = () => {
  return (
    <section className="relative border-black shadow-xl mt-20 bg-white pt-20 pb-20 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
              alt="Travel"
              className="rounded-xl w-full h-auto object-cover"
            />
            {/* <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-red-500 text-xl font-semibold">Travel Packages</p>
              <p className="text-gray-800">50+</p>
            </div>
            <div className="absolute top-4 left-40 bg-white p-4 m-12 rounded-lg shadow-lg">
              <p className="text-red-500 text-xl font-semibold">Visitor</p>
              <p className="text-gray-800">4,589</p>
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">World Best Travel Agency: Dezaboo</h1>
          <p className="text-gray-700 mb-6">
            Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps. 
          </p>
          <a href="#" className="inline-block bg-red-500 text-white py-2 px-4 rounded-full shadow-lg">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   return (
//     <section className="relative bg-white pt-10 pb-20 px-5 md:px-20 mt-[100px]">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="w-full md:w-1/2 sm:1/3 mb-10 md:mb-0 mt-30">
//           <div className="relative ">
//             <img
//               src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
//               alt="Travel"
//               className="rounded-xl w-auto h-auto object-cover"
//             />
//             <div className="relative bottom-[340px] left-[380px] bg-white p-4 rounded-lg shadow-lg w-60">
//               <p className="text-red-500 text-xl font-semibold">Visitor</p>
//               <p className="text-gray-800">4,589</p>
//             </div>
//             <div className="relative bottom-[180px] right-20 bg-white p-4 rounded-lg shadow-lg w-60">
//               <p className="text-red-500 text-xl font-semibold">Travel Packages</p>
//               <p className="text-gray-800">50+</p>
//             </div>
            
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 md:pl-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">World Best Travel Agency: Dezaboo</h1>
//           <p className="text-gray-700 mb-6">
//             Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps. 
//           </p>
//           <a href="#" className="inline-block bg-red-500 text-white py-2 px-4 rounded-full shadow-lg">Read More</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
