
"use client"
// Carousel.js
import React, { useState } from 'react';

const images = [
  { id: 1, url: 'https://via.placeholder.com/800x400?text=Slide+1' },
  { id: 2, url: 'https://via.placeholder.com/800x400?text=Slide+2' },
  { id: 3, url: 'https://via.placeholder.com/800x400?text=Slide+3' },
  { id: 4, url: 'https://via.placeholder.com/800x400?text=Slide+4' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`transition-transform duration-500 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            } absolute inset-0 w-full h-full`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
