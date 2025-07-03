import React from 'react';
import { Phone } from 'lucide-react';
import BuildinImage from '../../assets/images/image.png'; 

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10" />
        <img
          src={BuildinImage}
          alt="Hospital building"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="h-[54vh] container-custom relative z-20">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Health Is Our <span className="text-accent-400">Priority</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Tilottama Hospital provides exceptional healthcare with a dedicated team 
              of specialists and state-of-the-art facilities for all your medical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+9779857025855" className="btn bg-accent-500 text-white hover:bg-accent-600">
                <Phone size={20} className="mr-2" />
                Emergency: +977 9857025855
              </a>
            </div>
          </div>

      </div>
    </section>
  );
};

export default HeroSection;