import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 py-20 md:py-32 lg:py-48 text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)' }}></div>
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
          Elevate Your Online Presence with <span className="text-indigo-600">Premium Design</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Crafting sophisticated and functional websites that capture attention and drive engagement. Experience design excellence.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-200 focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Get Started Today
        </button>
      </div>
    </section>
  );
};
