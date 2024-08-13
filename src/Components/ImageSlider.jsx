// import React, { useState, useEffect } from 'react';

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
//     'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg',
//     'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaws1vfA8PkfdAbYTSKvK38OjYdPBHlLYruQ&s',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000); 

//     return () => clearInterval(interval); 
//   }, [images.length]);

//   return (
//     <div className="relative overflow-hidden w-full h-[580px]">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div className="flex-shrink-0 w-full h-full" key={index}>
//             <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
    'https://www.shutterstock.com/image-photo/landscape-road-mountains-600nw-2465573769.jpg',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaws1vfA8PkfdAbYTSKvK38OjYdPBHlLYruQ&s',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="relative shrink-0 overflow-hidden w-full h-[250px] sm:h-[330px] md:h-[420px] lg:h-[500px] xl:h-[580px]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-full h-full" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
