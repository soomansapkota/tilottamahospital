import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center animate-slide-up">
      <p className="text-4xl md:text-5xl font-bold mb-2">{value}</p>
      <p className="text-primary-200">{label}</p>
    </div>
  );
};

export default StatCard;