import React, { useState } from "react";

const cardsData = [
    {
      id: 1,
      title: "Nature",
      backgroundImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60",
      ],
    },
    {
      id: 2,
      title: "Adventure",
      backgroundImage:
        "https://images.unsplash.com/photo-1516910817561-6d7df8cd0268?auto=format&fit=crop&w=800&q=60",
      images: [
        "https://images.unsplash.com/photo-1516910817561-6d7df8cd0268?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1498598452538-80b0a2a8baf1?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1533240471994-3f301a7a17a8?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1490606923638-1264e9995f56?auto=format&fit=crop&w=1200&q=60",
      ],
    },
    {
      id: 3,
      title: "City",
      backgroundImage:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
      images: [
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1495106245179-7a68f3e4e0a3?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60",
      ],
    },
    {
      id: 4,
      title: "Water",
      backgroundImage:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60",
      images: [
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=60",
      ],
    },
  ];

const CardGalleryComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle card click to open gallery
  const handleCardClick = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  // Handle closing the gallery
  const handleCloseGallery = () => {
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  // Navigate to previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative min-h-screen" 
    style={{
        // backgroundImage:
        //   "url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      {/* Card Section */}
      {!selectedImages.length && (
        <div className="flex flex-wrap justify-center space-x-4  px-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-80 h-80 bg-cover bg-center cursor-pointer relative flex items-center justify-center text-white text-2xl font-bold rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
              onClick={() => handleCardClick(card.images)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition-opacity duration-300"></div>
              {/* Card Title */}
              <div className="relative z-10">{card.title}</div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Section */}
      {selectedImages.length > 0 && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={handleCloseGallery}
          >
            &times;
          </button>

         

          {/* Full Screen Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />

            {/* Left Arrow */}
            <div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300"
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            {/* Right Arrow */}
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 px-4 overflow-x-auto">
             {/* Back to Cards Button */}
          <button
            className="absolute bottom-4 bg-red-900 left-4 text-white  px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition duration-300"
            onClick={handleCloseGallery}
          >
            Back to Cards
          </button>
            {selectedImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-24 h-16 rounded-lg bg-cover bg-center cursor-pointer transition-transform duration-300 ${
                  currentIndex === index
                    ? "border-4 border-white transform scale-110"
                    : "border-2 border-gray-300"
                }`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGalleryComponent;
