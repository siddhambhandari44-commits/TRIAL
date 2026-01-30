import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-indigo-700 py-16 md:py-20 text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Transform Your Vision?
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-8">
          Join countless satisfied clients who have elevated their digital presence with our bespoke design solutions.
        </p>
        <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Request a Free Consultation
        </button>
      </div>
    </section>
  );
};
