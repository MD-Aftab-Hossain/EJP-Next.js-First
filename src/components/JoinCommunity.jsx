 "use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const JoinCommunity = () => {
  return (
    <section className="bg-gradient-to-r mb-10 from-green-800 to-green-600 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2  key={Date.now()}  className="text-4xl md:text-5xl font-bold mb-4">
          
          <Typewriter
            words={["Join the Community of Creative Minds"]}
            loop={1000}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Connect with artists, share your creations, and explore inspiring galleries.
        </p>
        <div className="grid my-4 mt-10 grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">1000+</p>
            <p>Artists</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5000+</p>
            <p>Artworks</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Weekly</p>
            <p>Featured Creatives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
