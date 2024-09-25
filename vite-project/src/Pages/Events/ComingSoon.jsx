import React, { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 1000); // Adjust the duration for zoom in/out

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/6410508.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1
        className={`text-6xl font-bold text-white transition-transform duration-500 ${isZoomed ? 'scale-110' : 'scale-100'}`}
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        Coming Soon!
      </h1>
    </div>
  );
};

export default ComingSoon;