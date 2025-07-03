import React from 'react';
import { 
  Bone, 
  Baby, 
  Stethoscope, 
  Microscope, 
  Syringe, 
  Pill, 
  FlaskConical, 
  CheckCircle,
  Phone,
  Ear,
  HeartPulse,
  MonitorPlay,
  X,
  Ambulance,
  Scissors,
  Droplet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Ear className="h-12 w-12 text-primary-500" />,
      title: 'Ear, Nose and Throat',
      description: 'Specialized care for ENT disorders with advanced diagnostic and treatment options for all ear, nose, and throat conditions.',
      features: [
        'Hearing Tests',
        'Sinus Treatment',
        'Tonsillectomy',
        'Voice Disorder Management'
      ]
    },
    {
      icon: <Bone className="h-12 w-12 text-primary-500" />,
      title: 'Orthopedic and Neurology',
      description: 'Comprehensive care for musculoskeletal and nervous system disorders with advanced surgical and non-surgical treatment options.',
      features: [
        'Joint Replacement',
        'Spinal Surgery',
        'Stroke Management',
        'Nerve Disorder Treatment'
      ]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary-500" />,
      title: 'General Physician',
      description: 'Primary healthcare services for diagnosis, treatment, and prevention of various adult health conditions.',
      features: [
        'Health Check-ups',
        'Chronic Disease Management',
        'Preventive Care',
        'Vaccinations'
      ]
    },
    {
      icon: <Baby className="h-12 w-12 text-primary-500" />,
      title: 'Pediatrics and Infant Care',
      description: 'Specialized healthcare services for children from birth through adolescence in a child-friendly environment.',
      features: [
        'Well-baby Checkups',
        'Childhood Vaccinations',
        'Growth Monitoring',
        'Pediatric Emergencies'
      ]
    },
    {
      icon: <Syringe className="h-12 w-12 text-primary-500" />,
      title: 'Anesthesiology',
      description: 'Professional anesthesia services for surgical procedures and pain management with the highest safety standards.',
      features: [
        'Surgical Anesthesia',
        'Pain Management',
        'Critical Care',
        'Regional Anesthesia'
      ]
    },
    {
      icon: <Scissors className="h-12 w-12 text-primary-500" />,
      title: 'General and Laparoscopic Surgery',
      description: 'Advanced surgical solutions including minimally invasive laparoscopic procedures for various conditions.',
      features: [
        'Appendectomy',
        'Gallbladder Surgery',
        'Hernia Repair',
        'Minimally Invasive Procedures'
      ]
    },
    {
      icon: <Droplet className="h-12 w-12 text-primary-500" />,
      title: 'Urology',
      description: 'Specialized care for urinary tract and male reproductive system disorders with advanced treatment options.',
      features: [
        'Kidney Stone Treatment',
        'Prostate Care',
        'Urinary Incontinence',
        'Urologic Surgery'
      ]
    },
    {
      icon: <Microscope className="h-12 w-12 text-primary-500" />,
      title: 'Gynecology and Obstetrics',
      description: 'Comprehensive women\'s health services including prenatal care, delivery, and gynecological treatments.',
      features: [
        'Prenatal Care',
        'Delivery Services',
        'Pap Smears',
        'Menopause Management'
      ]
    }
  ];
  
  const diagnosticServices = [
    { icon: <X className="h-12 w-12 text-primary-500" />, name: 'Digital X-Ray' },
    { icon: <HeartPulse className="h-12 w-12 text-primary-500" />, name: 'E.C.G.' },
    { icon: <MonitorPlay className="h-12 w-12 text-primary-500" />, name: 'Video X-ray' },
  ];

  const additionalServices = [
    { icon: <Pill size={20} />, name: 'Pharmacy' },
    { icon: <FlaskConical size={20} />, name: 'Laboratory' },
    { icon: <Ambulance size={20} />, name: 'Emergency Services' },
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
              At Tilottama Hospital, we offer a wide range of medical services designed to address all your healthcare needs. Our dedicated teams of specialists work together to provide integrated care using the latest medical advancements.
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
                  Emergency: 977 9857025855
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

      {/* Diagnostic Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diagnostic Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
            Our diagnostic services utilize the latest technology and techniques to provide accurate and timely results.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {diagnosticServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold">{service.name}</h3>
              </div>
            ))}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      
    
    </div>
  );
};

export default ServicesPage;