// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import CardGrid from './Cards';

// const Carousel = () => {
//   const [activeTab, setActiveTab] = useState('Travel');

//   const imageSets = {
//     Travel: [
//         "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60",
//     ],
//     Family: [
//        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=60",
//     ],
//     Picnic: [
//       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1495106245179-7a68f3e4e0a3?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=60",
//         "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
//     ],
//   };

//   // Slick Slider Settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow: <CustomPrevArrow />,  // Custom left arrow
//     nextArrow: <CustomNextArrow />,  // Custom right arrow
//   };

//   const handleTabChange = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="relative w-full">
//       {/* Tabs */}
//       <div className="tabs flex justify-center mb-5 space-x-4">
//         <button
//           className={`tab py-2 px-4 rounded-lg border transition-colors ${
//             activeTab === 'Travel' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => handleTabChange('Travel')}
//         >
//           Travel
//         </button>
//         <button
//           className={`tab py-2 px-4 rounded-lg border transition-colors ${
//             activeTab === 'Family' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => handleTabChange('Family')}
//         >
//           Family
//         </button>
//         <button
//           className={`tab py-2 px-4 rounded-lg border transition-colors ${
//             activeTab === 'Picnic' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => handleTabChange('Picnic')}
//         >
//           Picnic
//         </button>
//       </div>

//       {/* Slick Slider Container */}
//       <div className="carousel-container w-[900px] h-[500px] mx-auto overflow-hidden relative">
//         {/* Slick Slider */}
//         <Slider {...sliderSettings} className="mx-auto">
//           {imageSets[activeTab].map((url, index) => (
//             <div key={index} className="carousel-item">
//               <img
//                 src={url}
//                 alt={`${activeTab} ${index + 1}`}
//                 className="w-full h-auto rounded-lg shadow-md"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <CardGrid/>
//     </div>
//   );
// };

// // Custom Arrow Components
// const CustomPrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={`${className} slick-prev bg-green-500 text-white rounded-full absolute top-1/2 transform -translate-y-1/2`}
//       onClick={onClick}
//       style={{ left: '-35px' }}  // Position the arrow
//     >
//       ◀
//     </div>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={`${className} slick-next bg-green-500 text-white rounded-full absolute top-1/2 transform -translate-y-1/2`}
//       onClick={onClick}
//       style={{ right: '-35px' }}  // Position the arrow
//     >
//       ▶
//     </div>
//   );
// };

// export default Carousel;
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardGrid from './Cards';

const Carousel = () => {
  const imageSet = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60",
  ];

  // Slick Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div className="relative w-full ">
      <div className=' flex justify-center items-center mt-4 mb-4' >

       <h1 className='text-cyan-400 text-5xl font-bold '>Glimpse of the Events</h1>
      </div>
      {/* Slick Slider Container */}
      <div className="carousel-container w-[900px] h-[500px] mx-auto overflow-hidden relative rounded-lg">
        {/* Slick Slider */}
        <Slider {...sliderSettings} className="mx-auto">
          {imageSet.map((url, index) => (
            <div key={index} className="carousel-item">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
      <CardGrid/>
    </div>
  );
};



export default Carousel;
