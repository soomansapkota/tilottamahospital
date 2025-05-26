import React from 'react';
import { Award, CheckCircle, Users, Heart, Clock, Shield, Smile, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary-500" />,
      title: 'Compassionate Care',
      description: 'We treat each patient with kindness, empathy, and respect, focusing on their unique needs.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: 'Excellence',
      description: 'We strive for the highest standards of quality and safety in all our medical services.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Teamwork',
      description: 'Our healthcare professionals collaborate to provide integrated, comprehensive care.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-500" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in our patient interactions.'
    },
  ];
  
  const milestones = [
    {
      year: '1995',
      title: 'Hospital Founded',
      description: 'HealthPlus Hospital was established with a vision to provide quality healthcare to all.'
    },
    {
      year: '2005',
      title: 'New Cardiac Center',
      description: 'Opened a state-of-the-art cardiac center equipped with the latest technology.'
    },
    {
      year: '2010',
      title: 'Research Institute',
      description: 'Established a dedicated medical research institute to advance healthcare innovations.'
    },
    {
      year: '2015',
      title: 'Community Programs',
      description: 'Launched extensive community outreach programs to improve public health.'
    },
    {
      year: '2020',
      title: 'Hospital Expansion',
      description: 'Completed a major expansion, adding new departments and advanced facilities.'
    },
  ];
  
  const team = [
    {
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
      description: 'With over 20 years of experience in healthcare management and medical practice.'
    },
    {
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Sarah Johnson',
      position: 'Head of Cardiology',
      description: 'Board-certified cardiologist leading our award-winning heart center.'
    },
    {
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. James Wilson',
      position: 'Head of Neurology',
      description: 'Pioneering researcher in neurological disorders and innovative treatments.'
    },
    {
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Emily Rodriguez',
      position: 'Head of Pediatrics',
      description: 'Dedicated to providing excellent care for children of all ages.'
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HealthPlus Hospital</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Providing exceptional healthcare with compassion and expertise since 1995
          </p>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To enhance the health and wellbeing of the communities we serve through exceptional care, education, and research, while treating each patient with compassion, respect, and dignity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the premier healthcare provider, delivering innovative, patient-centered care that sets the standard for quality and service excellence in our region and beyond.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-medium">
              <img 
                src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hospital team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide our approach to patient care and hospital operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 text-center animate-fade-in">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Why Choose HealthPlus Hospital</h2>
              <p className="text-gray-700 mb-6">
                At HealthPlus Hospital, we combine medical excellence with compassionate care to provide the best possible healthcare experience for our patients. Our commitment to quality, innovation, and patient satisfaction sets us apart.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Medical Technology</h3>
                    <p className="text-gray-600">
                      State-of-the-art diagnostic and treatment equipment for accurate and effective care.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Medical Team</h3>
                    <p className="text-gray-600">
                      Board-certified physicians and highly trained healthcare professionals in every specialty.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Patient-Centered Care</h3>
                    <p className="text-gray-600">
                      Personalized treatment plans tailored to each patient's unique needs and circumstances.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Comprehensive Services</h3>
                    <p className="text-gray-600">
                      A wide range of medical services under one roof, from preventive care to specialized treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-medium">
              <img 
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Advanced medical equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From our founding to the present day, we've been committed to advancing healthcare and serving our community.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 z-0"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 flex flex-col ${
                    index % 2 === 0 
                      ? 'md:flex-row' 
                      : 'md:flex-row-reverse'
                  } animate-fade-in`}
                >
                  <div className="md:w-1/2 mb-8 md:mb-0 flex">
                    <div className={`${
                      index % 2 === 0 
                        ? 'md:mr-12 ml-auto' 
                        : 'md:ml-12'
                    } bg-white p-6 rounded-lg shadow-soft max-w-md`}>
                      <div className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-bold rounded-md mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 -ml-2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-primary-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our hospital with expertise and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden border border-gray-100 animate-fade-in">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Healthcare Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're looking for quality healthcare services or a fulfilling career opportunity, HealthPlus Hospital welcomes you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              <Calendar size={18} className="mr-2" />
              Book an Appointment
            </a>
            <a href="/careers" className="btn bg-accent-500 text-white hover:bg-accent-600">
              <Users size={18} className="mr-2" />
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;