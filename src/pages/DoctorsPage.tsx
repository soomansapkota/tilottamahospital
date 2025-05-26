import React, { useState } from 'react';
import { Phone, Mail, Search, Calendar, CheckCircle } from 'lucide-react';

interface Doctor {
  id: number;
  image: string;
  name: string;
  specialty: string;
  education: string;
  experience: string;
  description: string;
  languages: string[];
  availability: string[];
}

const DoctorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'All Specialties',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Ophthalmology',
    'Dermatology',
  ];

  const doctors: Doctor[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      education: 'MD, Harvard Medical School',
      experience: '15+ years',
      description: 'Dr. Johnson is a board-certified cardiologist specializing in interventional cardiology and heart failure management. She has performed over 1,000 cardiac procedures and is committed to providing personalized care for patients with heart conditions.',
      languages: ['English', 'Spanish'],
      availability: ['Mon, Wed, Fri: 9AM - 5PM']
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      education: 'MD, Johns Hopkins University',
      experience: '12+ years',
      description: 'Dr. Chen specializes in the diagnosis and treatment of neurological disorders, with particular expertise in stroke treatment, epilepsy, and movement disorders. He is dedicated to advancing neurological care through research and clinical practice.',
      languages: ['English', 'Mandarin'],
      availability: ['Tues, Thurs: 8AM - 4PM', 'Sat: 9AM - 1PM']
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      education: 'MD, Yale School of Medicine',
      experience: '18+ years',
      description: 'Dr. Wilson is an orthopedic surgeon specializing in joint replacement, sports medicine, and minimally invasive surgical techniques. He has helped countless patients regain mobility and improve their quality of life.',
      languages: ['English'],
      availability: ['Mon, Wed, Fri: 8AM - 4PM']
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      education: 'MD, Stanford University',
      experience: '10+ years',
      description: 'Dr. Rodriguez is a board-certified pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence. She focuses on preventive care, developmental milestones, and childhood illnesses.',
      languages: ['English', 'Spanish'],
      availability: ['Mon-Fri: 9AM - 5PM']
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. David Thompson',
      specialty: 'Ophthalmology',
      education: 'MD, Duke University',
      experience: '14+ years',
      description: 'Dr. Thompson specializes in comprehensive eye care, including cataract surgery, glaucoma treatment, and LASIK vision correction. He is committed to helping patients achieve optimal eye health and clear vision.',
      languages: ['English'],
      availability: ['Tues, Thurs: 9AM - 6PM', 'Sat: 9AM - 2PM']
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/5327616/pexels-photo-5327616.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Lisa Brown',
      specialty: 'Dermatology',
      education: 'MD, University of Pennsylvania',
      experience: '11+ years',
      description: 'Dr. Brown is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She provides comprehensive care for skin conditions, skin cancer screenings, and aesthetic procedures.',
      languages: ['English', 'French'],
      availability: ['Mon, Wed, Fri: 8:30AM - 4:30PM']
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === '' || 
                             selectedSpecialty === 'All Specialties' || 
                             doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our team of experienced medical professionals dedicated to providing exceptional care
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="flex-grow">
              <label htmlFor="search-doctors" className="block text-sm font-medium text-gray-700 mb-1">
                Search Doctors
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  id="search-doctors"
                  className="input pl-10"
                  placeholder="Search by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:w-64">
              <label htmlFor="specialty-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Specialty
              </label>
              <select
                id="specialty-filter"
                className="input"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty === 'All Specialties' ? '' : specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors Listing */}
      <section className="py-16">
        <div className="container-custom">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-lg shadow-soft overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-medium hover:border-primary-100 animate-fade-in"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-full">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h2 className="text-2xl font-semibold mb-1">{doctor.name}</h2>
                      <p className="text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                          {doctor.education}
                        </span>
                        <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                          {doctor.experience} Experience
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {doctor.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Languages:</p>
                        <div className="flex flex-wrap gap-2">
                          {doctor.languages.map((language, index) => (
                            <span
                              key={index}
                              className="inline-block bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 mb-1">Availability:</p>
                        <ul className="text-gray-600 text-sm">
                          {doctor.availability.map((time, index) => (
                            <li key={index}>{time}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`/contact?doctor=${encodeURIComponent(doctor.name)}`}
                          className="btn btn-primary btn-sm"
                        >
                          <Calendar size={16} className="mr-2" />
                          Schedule Appointment
                        </a>
                        <a
                          href={`tel:+11234567890`}
                          className="btn btn-outline btn-sm"
                        >
                          <Phone size={16} className="mr-2" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No doctors found matching your search criteria.</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-medium p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Medical Team</h2>
                <p className="text-gray-700 mb-6">
                  HealthPlus Hospital is always looking for talented and passionate healthcare professionals to join our team. We offer a supportive work environment, opportunities for professional growth, and a chance to make a real difference in our patients' lives.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Competitive compensation and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Continuing education opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Advanced medical technology and facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Collaborative and supportive work environment</span>
                  </li>
                </ul>
                <a href="/careers" className="btn btn-primary">
                  Explore Career Opportunities
                </a>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Medical team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;