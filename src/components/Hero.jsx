'use client'; // ✅ This makes the component a client component

import React from 'react';
import { useRouter } from 'next/navigation'; // use next/navigation in App Router

const Hero = () => {
  const router = useRouter();

  const handleCTA = () => {
    router.push('/explore'); // navigate to your gallery page
  };

  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/hero-bg.jpg')` }}
    >
      <div className="bg-black/50 p-8 rounded-lg text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Share Your Creativity with the World
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          Discover, explore, and appreciate amazing artworks from talented artists worldwide.
        </p>
        <button
          onClick={handleCTA}
          className="btn bg-green-600 border-0 p-4"
        >
          Explore Artworks
        </button>
      </div>
    </section>
  );
};

export default Hero;
