 "use client"

import React from "react";

const artists = [
  { name: "Sophia Lee", role: "Digital Illustrator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08SZ38baOJKEtQ0bHCYBagFVTuI2DO89qSQ&s" },
  { name: "Arjun Patel", role: "Concept Artist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM237tF21rpXqHZobg8H4k5mHIxYvh8RX_oQ&s" },
  { name: "Emma Brown", role: "Painter", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacrO36guVhvb9lmkCOOqAT9in-_4phDMqVw&s" },
  { name: "Liam Johnson", role: "3D Designer", img: "https://pbs.twimg.com/profile_images/1111801647985029120/JVZIZ0WF_400x400.jpg" },
];

const TopArtists = () => {
  return (
    <section className="max-w-6xl mx-auto mb-30 px-4 py-12">
      <h2 className="text-4xl font-black text-center text-green-600 mb-7">Top Artists of the Week</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {artists.map((a, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <img src={a.img} alt={a.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
            <h3 className="text-lg text-green-600 font-semibold text-center mt-4">{a.name}</h3>
            <p className="text-sm text-black text-center">{a.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArtists;
