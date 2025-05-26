import React from 'react';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope, 
  Activity,
  Microscope, 
  Syringe, 
  Pill, 
  FlaskConical, 
  CheckCircle,
  Calendar,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Heart className="h-12 w-12 text-primary-500" />,
      title: 'Cardiology',
      description: 'Comprehensive diagnostic and treatment services for heart conditions, including advanced cardiac imaging, interventional procedures, and cardiac rehabilitation programs.',
      features: [
        'Advanced Cardiac Imaging',
        'Interventional Cardiology',
        'Heart Failure Management',
        'Electrophysiology Studies'
      ]
    },
    {
      icon: <Brain className="h-12 w-12 text-primary-500" />,
      title: 'Neurology',
      description: 'Specialized care for disorders of the brain, spine, and nervous system with cutting-edge diagnostic capabilities and treatment options for complex neurological conditions.',
      features: [
        'Stroke Treatment Center',
        'Epilepsy Monitoring',
        'Neurosurgery',
        'Multiple Sclerosis Care'
      ]
    },
    {
      icon: <Bone className="h-12 w-12 text-primary-500" />,
      title: 'Orthopedics',
      description: 'Expert care for musculoskeletal issues, from sports injuries to joint replacements, with minimally invasive surgical techniques and comprehensive rehabilitation services.',
      features: [
        'Joint Replacement Surgery',
        'Sports Medicine',
        'Spine Surgery',
        'Physical Therapy'
      ]
    },
    {
      icon: <Baby className="h-12 w-12 text-primary-500" />,
      title: 'Pediatrics',
      description: 'Comprehensive healthcare for infants, children, and adolescents in a child-friendly environment with specialized pediatric subspecialties for all developmental stages.',
      features: [
        'Well-Child Visits',
        'Pediatric Immunizations',
        'Developmental Assessments',
        'Pediatric Subspecialties'
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-primary-500" />,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine vision exams to advanced surgical procedures, including treatment for cataracts, glaucoma, and retinal disorders.',
      features: [
        'Cataract Surgery',
        'LASIK Vision Correction',
        'Glaucoma Treatment',
        'Retinal Disorder Management'
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary-500" />,
      title: 'Primary Care',
      description: 'Comprehensive primary healthcare services for patients of all ages, focusing on preventive care, chronic disease management, and health maintenance.',
      features: [
        'Annual Check-ups',
        'Chronic Disease Management',
        'Preventive Screenings',
        'Health Education'
      ]
    },
    {
      icon: <Activity className="h-12 w-12 text-primary-500" />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response times, advanced life-saving equipment, and a skilled emergency medicine team ready to handle any medical crisis.',
      features: [
        '24/7 Emergency Services',
        'Trauma Center',
        'Rapid Response Team',
        'Critical Care Unit'
      ]
    },
    {
      icon: <Microscope className="h-12 w-12 text-primary-500" />,
      title: 'Laboratory Services',
      description: 'State-of-the-art diagnostic laboratory offering a comprehensive range of testing services with quick and accurate results for informed medical decisions.',
      features: [
        'Blood Tests',
        'Pathology Services',
        'Genetic Testing',
        'Microbiology'
      ]
    }
  ];
  
  const additionalServices = [
    { icon: <Syringe size={20} />, name: 'Immunization Services' },
    { icon: <Pill size={20} />, name: 'Pharmacy Services' },
    { icon: <FlaskConical size={20} />, name: 'Radiology & Imaging' },
    { icon: <Activity size={20} />, name: 'Rehabilitation Services' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by expert specialists using advanced medical technology
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Healthcare Solutions</h2>
            <p className="text-gray-700 mb-6">
              At HealthPlus Hospital, we offer a wide range of medical services designed to address all your healthcare needs. Our dedicated teams of specialists work together to provide integrated care using the latest medical advancements.
            </p>
            <p className="text-gray-700">
              Whether you need routine preventive care, specialized treatment, or emergency services, our goal is to deliver exceptional medical care with compassion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-medium hover:border-primary-100 animate-fade-in">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Emergency Services</h2>
                <p className="text-gray-700 mb-6">
                  Our emergency department is open 24/7, staffed by board-certified emergency physicians and specially trained nurses ready to provide immediate, life-saving care for all medical emergencies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Rapid triage and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Advanced life support and trauma care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Immediate access to specialists and critical care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>State-of-the-art diagnostic imaging on site</span>
                  </li>
                </ul>
                <div className="flex items-center text-primary-600 font-bold">
                  <Phone size={20} className="mr-2" />
                  Emergency: (123) 456-7999
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Emergency department" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond our specialized departments, we offer a variety of supporting services to enhance your healthcare experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Don't see the service you're looking for? Contact us to learn more about our complete range of healthcare services.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us For More Information
            </Link>
          </div>
        </div>
      </section>
      
      {/* Patient Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Patient Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're committed to providing you with the information and support you need for your healthcare journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Patient Education</h3>
              <p className="text-gray-700 mb-4">
                Access educational materials about common medical conditions, treatments, and preventive care to help you make informed decisions about your health.
              </p>
              <a href="#" className="text-primary-600 font-medium hover:text-primary-700">
                View Resources →
              </a>
            </div>
            
            <div className="bg-secondary-50 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-secondary-700">Insurance & Billing</h3>
              <p className="text-gray-700 mb-4">
                Get information about accepted insurance plans, billing procedures, financial assistance options, and payment plans.
              </p>
              <a href="#" className="text-secondary-600 font-medium hover:text-secondary-700">
                Learn More →
              </a>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-accent-700">Visitor Information</h3>
              <p className="text-gray-700 mb-4">
                Find details about visiting hours, parking, accommodation options, and amenities available at our hospital.
              </p>
              <a href="#" className="text-accent-600 font-medium hover:text-accent-700">
                Visitor Guide →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule an Appointment?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our team is ready to provide you with exceptional care tailored to your specific needs.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
            <Calendar size={18} className="mr-2" />
            Book Your Appointment Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;