import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 transform hover:-translate-y-1">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
