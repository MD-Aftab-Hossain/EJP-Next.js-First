"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { title: "3D Apple Design", img: "https://cdn.pixabay.com/photo/2016/04/02/09/43/apple-1302430_1280.jpg" },
  { title: "Magical tree", img: "https://indianartideas.in/articleimages/1400657217Abstract-oil-painting-Hot-Contemporary-Art-Hand-painted-canvas-art-A-001-F.jpg" },
  { title: "Wonderful Sunset", img: "https://indianartideas.in/images/blog/Beautiful%20morning.jpg" },
];

const Slider = () => {
  return (
    <Swiper modules={[Autoplay, Pagination, EffectFade]} loop={true}
    autoplay={{ delay: 1700, disableOnInteraction: false }} pagination={{ clickable: true }} effect="fade" className="w-full lg:h-[95vh] h-[99vh]">
      {slides.map((slide) => (
        <SwiperSlide  className="flex items-center justify-center text-white text-4xl font-bold bg-cover bg-center" style={{ backgroundImage: `url(${slide.img})` }}>
          {slide.title}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
