import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10" />
        <img
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hospital building"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Health Is Our <span className="text-accent-400">Priority</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              HealthPlus Hospital provides exceptional healthcare with a dedicated team 
              of specialists and state-of-the-art facilities for all your medical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
                <Calendar size={20} className="mr-2" />
                Book an Appointment
              </Link>
              <a href="tel:+11234567890" className="btn bg-accent-500 text-white hover:bg-accent-600">
                <Phone size={20} className="mr-2" />
                Emergency: (123) 456-7890
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-up">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Request an Appointment</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    placeholder="John Doe"
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="hero-email"
                    placeholder="john@example.com"
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    placeholder="(123) 456-7890"
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hero-service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="hero-service"
                    className="input"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="general">General Checkup</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;