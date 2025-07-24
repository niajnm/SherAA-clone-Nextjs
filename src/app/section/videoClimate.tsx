

import React from 'react';
import Image from 'next/image';

interface ClimateHeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ClimateHero: React.FC<ClimateHeroProps> = ({
  title = "Uncompromising Effects of Climate Change",
  subtitle = "The unrelenting impacts of climate change are causing irreversible damage, demanding urgent global action to mitigate and adapt.",
  imageUrl = "/climate-illustration.jpg", // You'll need to add your image to the public folder
  imageAlt = "Artistic illustration representing climate change impacts"
}) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main Image Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for the artistic illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-purple-400/80 to-pink-400/80">
              {/* Abstract artistic elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Face silhouette */}
                <div className="relative w-64 h-80 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full opacity-90">
                  {/* Eyes */}
                  {/* <div className="absolute top-24 left-16 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="absolute top-24 right-16 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  </div> */}
                  
                  {/* Play button overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                {/* <div className="absolute top-16 left-16 w-12 h-8 bg-green-400 opacity-70 rounded-full transform rotate-45"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-60 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-10 h-10 bg-pink-300 opacity-80 rounded-full"></div>
                <div className="absolute bottom-32 right-16 w-20 h-12 bg-blue-400 opacity-70 rounded-lg transform rotate-12"></div> */}
                
                {/* Additional decorative circles
                <div className="absolute top-20 right-32 flex space-x-2">
                  <div className="w-6 h-6 bg-pink-200 opacity-70 rounded-full"></div>
                  <div className="w-6 h-6 bg-pink-200 opacity-70 rounded-full"></div>
                  <div className="w-6 h-6 bg-pink-200 opacity-70 rounded-full"></div>
                </div>
                
                <div className="absolute bottom-16 left-32 flex space-x-1">
                  <div className="w-4 h-4 bg-pink-300 opacity-80 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-300 opacity-80 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-300 opacity-80 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-300 opacity-80 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-300 opacity-80 rounded-full"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClimateHero;