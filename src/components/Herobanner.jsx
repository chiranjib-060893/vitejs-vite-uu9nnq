import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/kolkata.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Container for Content */}
      <div className="relative flex items-center justify-center h-full">
        {/* Left Text */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">
          <h2>Welcome to My Portfolio</h2>
        </div>

        {/* Centered Profile Image */}
        <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Right Text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold">
          <h2>Explore My Work</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
