// import React, { useState, useEffect } from 'react';

// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9PPUtZi0nt98vbPsRivyJmqNoyZJzHADg&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVeiHMWHp3bueKWfNxWxqlTbpkdVoeceTYg&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVeiHMWHp3bueKWfNxWxqlTbpkdVoeceTYg&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9PPUtZi0nt98vbPsRivyJmqNoyZJzHADg&s',
// ];

// function NorContent() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//       if (currentIndex === images.length - 1) {
//         setTimeout(() => setCurrentIndex(0), 2000); // Delay before moving to the first image
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4">
//       <h1 className="text-center text-3xl font-bold mb-8">Top Destinations</h1>
//       <p className="text-center text-xl mb-8">Planning for a trip? We will organize your trip with the best places and within <br/> best budget!</p>
//       <div className="relative w-full overflow-hidden">
//         <div className="flex transition-transform duration-700 ease-in-out"
//              style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
//           {images.map((image, index) => (
//             <div key={index} className="w-1/5 flex-shrink-0 p-2">
//               <div className="bg-white p-4 rounded-lg shadow-lg h-80">
//                 <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-lg object-cover" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={prevSlide}
//           className="transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full shadow-lg">
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full shadow-lg">
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NorContent;




import React, { useState, useEffect } from 'react';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9PPUtZi0nt98vbPsRivyJmqNoyZJzHADg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVeiHMWHp3bueKWfNxWxqlTbpkdVoeceTYg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58judYx225Niz5uRBaJc1UJi4DFHjOZNJA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVeiHMWHp3bueKWfNxWxqlTbpkdVoeceTYg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9PPUtZi0nt98vbPsRivyJmqNoyZJzHADg&s',
];

function NorContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(1);

  const updateVisibleImages = () => {
    if (window.innerWidth >= 1280) {
      setVisibleImages(5);
    } else if (window.innerWidth >= 1024) {
      setVisibleImages(3);
    } else {
      setVisibleImages(1);
    }
  };

  useEffect(() => {
    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - visibleImages) {
        setTimeout(() => setCurrentIndex(0), 2000);
      } else {
        nextSlide();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleImages]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
       <h1 className="text-center text-3xl font-bold mb-8">Top Destinations</h1>
         <p className="text-center text-xl mb-8">Planning for a trip? We will organize your trip with the best places and within <br/> best budget!</p>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / visibleImages}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full p-2 sm:w-full md:w-full lg:w-1/3 xl:w-1/5">
              <div className="h-80">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full shadow-lg md:left-2 md:w-12 md:h-12">
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 bottom-1/3 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full shadow-lg md:right-2 md:w-12 md:h-12">
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default NorContent;
