import React from 'react';
import { Award, CheckCircle, Users, Heart, Clock, Shield, Smile, Calendar } from 'lucide-react';
import PharmaTeamImage from '../assets/images/pharmacy.png'; 
import ManagementImage from '../assets/images/management.png';

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
  

  
  const team = [
    {
      image: PharmaTeamImage,
      name: 'Pharmacy Team',
      position: 'Pharmacy Department'
    },

  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tilottama Hospital</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Providing exceptional healthcare with compassion and expertise since 2012
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
                src={ManagementImage} 
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Tilottama Hospital</h2>
              <p className="text-gray-700 mb-6">
                At Tilottama Hospital, we combine medical excellence with compassionate care to provide the best possible healthcare experience for our patients. Our commitment to quality, innovation, and patient satisfaction sets us apart.
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
                src={PharmaTeamImage} 
                alt="Advanced medical equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Our Leadership Team */}
      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden border border-gray-100 animate-fade-in">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.
                    } 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  {/* <p className="text-gray-600">{member.description}</p> */}
                {/* </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       */} 

    </div>
  );
};

export default AboutPage;