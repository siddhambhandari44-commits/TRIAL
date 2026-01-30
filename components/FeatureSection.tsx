import React from 'react';
import { FeatureCard } from './FeatureCard';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-2.25-2.25M10 10l4-4m-4 0l-4 4m6 6l-4 4m4 0l4-4m-6-16h4.586a2 2 0 011.414.586l7.414 7.414a2 2 0 010 2.828l-8.414 8.414a2 2 0 01-2.828 0L3.586 12.586A2 2 0 013 11.172V7.5a2 2 0 012-2z"></path>
        </svg>
      ),
      title: 'Stunning Visuals',
      description: 'Captivate your audience with breathtaking aesthetics and intuitive user interfaces designed for impact.',
      image: 'https://picsum.photos/400/300?random=2',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: 'Optimized Performance',
      description: 'Experience lightning-fast load times and seamless interactions, ensuring a superior user experience every time.',
      image: 'https://picsum.photos/400/300?random=3',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a4.75 4.75 0 014.75-4.75m0 0V4.5m0 0H15a2 2 0 012 2v2.5M15 12h3m-3 0V9.5m0 0a4.75 4.75 0 014.75 4.75v3a2.5 2.5 0 01-2.5 2.5H6.5a2.5 2.5 0 01-2.5-2.5v-3a4.75 4.75 0 014.75-4.75m0 0h-.01"></path>
        </svg>
      ),
      title: 'Fully Responsive',
      description: 'Your website will look flawless on any device, from desktops to tablets and smartphones, adapting beautifully.',
      image: 'https://picsum.photos/400/300?random=4',
    },
    {
      icon: (
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 1 002 2h4a2 2 002-2v7.586a2 2 00-.586 1.414l-4 4m-4-4v2m0-2a2 2 01-2 2H4a2 2 01-2-2V6a2 2 012-2h4a2 2 012 2zm-6 0h6"></path>
        </svg>
      ),
      title: 'Easy Customization',
      description: 'Tailor every aspect of your site with ease, thanks to a modular and developer-friendly codebase.',
      image: 'https://picsum.photos/400/300?random=5',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6">
          Unleash Your Potential
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover the powerful features that make our design platform stand out. We provide everything you need to succeed.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
