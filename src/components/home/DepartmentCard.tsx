import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DepartmentCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-medium hover:border-primary-100 animate-fade-in">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
      >
        Learn More 
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default DepartmentCard;