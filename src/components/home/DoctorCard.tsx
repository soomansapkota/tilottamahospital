import React from 'react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  description: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-medium hover:border-primary-100 animate-fade-in">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{specialty}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to="/doctors" 
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;