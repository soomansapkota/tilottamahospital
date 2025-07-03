import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  CheckCircle,
  Clock, 
  ArrowRight,
  Phone, 
  Ear,
  Bone,
  Baby,
  
} from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';
import StatCard from '../components/home/StatCard';
import DepartmentCard from '../components/home/DepartmentCard';
import DoctorCard from '../components/home/DoctorCard';
import KrishnaImage from '../assets/images/krishna.png';
import SantoshImage from '../assets/images/santosh-pokhrel.png';
import KishorImage from '../assets/images/kishor1.png';
import DoctorTeamImage from '../assets/images/doctorteam1.png';


const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Stethoscope size={40} className="text-primary-500" />,
      title: 'Expert Doctors',
      description: 'Our team of highly qualified medical professionals provides exceptional care.',
    },
    {
      icon: <Heart size={40} className="text-primary-500" />,
      title: 'Quality Care',
      description: 'We provide compassionate care with state-of-the-art medical technology.',
    },
    {
      icon: <Clock size={40} className="text-primary-500" />,
      title: '24/7 Service',
      description: 'Emergency medical services available 24 hours a day, 7 days a week.',
    },
  ];
  
  const departments = [
  
    {
      icon: <Bone className="h-12 w-12 text-primary-500" />,
      title: 'Orthopedics',
      description: 'Treatment for bone and joint issues, from sports injuries to complex surgeries.',
    },
    {
      icon: <Baby className="h-12 w-12 text-primary-500" />,
      title: 'Pediatrics',
      description: 'Dedicated care for infants, children, and adolescents in a child-friendly environment.',
    },
      {
 icon: (
    <svg 
      className="h-12 w-12 text-primary-500" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Circle (female symbol) */}
      <circle cx="12" cy="6" r="5" />
      
      {/* Plus sign */}
      <line x1="12" y1="11" x2="12" y2="20" /> {/* Vertical line */}
      <line x1="8" y1="16" x2="16" y2="16" /> {/* Horizontal line */}
    </svg>
  ),
      title: 'Gynaecology',
      description: 'Specialized care for women\'s health, including reproductive health and prenatal care.',
    },
    {
  icon: <Ear className="h-12 w-12 text-primary-500" />,
  title: 'Ear, Nose & Throat',
  description: 'Comprehensive care for conditions affecting the ear, nose, and throat, including hearing loss and sinus issues.',
}
];

  const doctors = [
    {
      image: SantoshImage,
      name: 'Dr. Santosh Pokhrel',
      specialty: 'Pediatrics',
      description: 'Passionate about providing comprehensive healthcare for children of all ages.',
    },
    {
      image: KrishnaImage,
      name: 'Dr. Krishna Kharel',
      specialty: 'Orthopedics',
      description: 'Dr. Kharel is an orthopedic surgeon specializing in joint replacement and minimally invasive surgical techniques. He has helped countless patients regain mobility and improve their quality of life.',
    },
    {
      image: KishorImage,
      name: 'Dr. Kishor Khatri',
      specialty: 'Orthopedics',
      description: 'Dr. Kishor Khatri helps people with bone and joint problems feel better and move easily again.',
    },
  ];
  
  const testimonials = [
    {
      content: "म आभारी छु! तपाईंको धैर्य, राम्रो सल्लाह र देखभालले स्वास्थ्य सुधारियो।",
      name: "Ram Bahadur Chetri",
      role: "Patient"
    },
    {
      content: "आभारी छु! डाक्टरले प्रशस्त समय दिएर उत्कृष्ट सल्लाह र उपचार गर्नुभयो।",
      name: "Hari Prasad Sharma",
      role: "Patient"
    },
    {
      content: "बाल रोग विभागले मेरो छोरालाई तनावपूर्ण समयमा सहज महसुस गरायो। हामी उनीहरूको विशेषज्ञता र सहानुभूतिका लागि आभारी छौं।",
      name: "Sita Devi Gurung",
      role: "Parent"
    },
  ];
  
  const stats = [
    { value: "10+", label: "Specialist Doctors" },
    { value: "25k+", label: "Satisfied Patients" },
    { value: "13+", label: "Years of Experience" },
    { value: "12", label: "Medical Departments" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={DoctorTeamImage} 
                alt="Modern hospital facility" 
                className="rounded-lg shadow-medium object-cover h-full w-full"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Excellence in Healthcare Since 2012</h2>
              <p className="text-gray-700 mb-6">
                For over 13 years, Tilottama Hospital has been at the forefront of medical excellence, providing compassionate care and cutting-edge treatments to our community. Our mission is to improve the health and wellbeing of the individuals and communities we serve.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'State-of-the-art medical facilities',
                  'Board-certified physicians and specialists',
                  'Comprehensive care across multiple specialties',
                  'Patient-centered approach to healthcare',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Departments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized departments offer comprehensive care for all your healthcare needs with experienced specialists and advanced technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department, index) => (
              <DepartmentCard
                key={index}
                icon={department.icon}
                title={department.title}
                description={department.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-outline">
              View All Departments
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Doctors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of highly qualified and experienced doctors are committed to providing you with the best medical care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
                description={doctor.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/doctors" className="btn btn-outline">
              View All Doctors
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Appointment Section
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-medium p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
                <p className="text-gray-600 mb-8">
                  Schedule a consultation with one of our expert doctors. We're dedicated to providing you with timely and quality healthcare.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Quick and easy online booking process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Flexible scheduling options to suit your needs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Same-day appointments available for urgent cases</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-primary-500 mr-2" />
                  <span className="text-gray-800 font-semibold">Call us: (123) 456-7890</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        className="input"
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description of Your Concern
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Please describe your symptoms or reason for appointment"
                      className="input"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    <Calendar size={18} className="mr-2" />
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences with our healthcare services and dedicated medical team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Exceptional Healthcare?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule an appointment today and take the first step towards better health with our expert medical team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </Link>
            <a href="tel:+11234567890" className="btn bg-accent-500 text-white hover:bg-accent-600">
              <Phone size={18} className="mr-2" />
              Call Now: +977 9857025855
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;