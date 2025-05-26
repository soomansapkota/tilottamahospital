import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  UserPlus, 
  Calendar, 
  CheckCircle,
  Clock, 
  ArrowRight,
  Phone 
} from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';
import StatCard from '../components/home/StatCard';
import DepartmentCard from '../components/home/DepartmentCard';
import DoctorCard from '../components/home/DoctorCard';

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
      icon: <svg className="h-12 w-12 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
      title: 'Cardiology',
      description: 'Comprehensive care for heart conditions with advanced diagnostic and treatment options.',
    },
    {
      icon: <svg className="h-12 w-12 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h1"></path><path d="M6 12h1"></path><path d="M10 12h11"></path><path d="M3 21h18"></path><path d="M19 16v5"></path><path d="M14 16v5"></path><path d="M9 16v5"></path><path d="M4 16v5"></path><path d="M4 7v5"></path><path d="M9 7v5"></path><path d="M14 7v5"></path><path d="M19 7v5"></path><path d="M3 3h18"></path></svg>,
      title: 'Neurology',
      description: 'Specialized care for disorders of the nervous system, brain, and spinal cord.',
    },
    {
      icon: <svg className="h-12 w-12 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 2 7 7-7 7"></path><path d="M9 16h7"></path><path d="M17 16a5 5 0 1 1-10 0c0-2.76 2.5-5 5-3 2.5-2 5 .24 5 3Z"></path></svg>,
      title: 'Orthopedics',
      description: 'Treatment for bone and joint issues, from sports injuries to complex surgeries.',
    },
    {
      icon: <svg className="h-12 w-12 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20a9 9 0 0 1-9-9"></path><path d="M11 10a1 1 0 0 1 0-2"></path><path d="M13 4.562C17.282 4.997 21 9.3 21 14c0 1.806-.887 2.966-2.146 2.966s-1.912-1.123-1.327-3.06c.585-1.938-.933-3.439-2.993-2.997-2.06.44-2.672-.346-2.147-2.765C12.91-3.827 6.207 3.502 11 4.562Z"></path></svg>,
      title: 'Pediatrics',
      description: 'Dedicated care for infants, children, and adolescents in a child-friendly environment.',
    },
  ];
  
  const doctors = [
    {
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      description: 'Board-certified cardiologist with over 15 years of experience in treating heart conditions.',
    },
    {
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      description: 'Specialized in diagnosing and treating disorders of the nervous system and brain.',
    },
    {
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      description: 'Passionate about providing comprehensive healthcare for children of all ages.',
    },
  ];
  
  const testimonials = [
    {
      content: "The care I received at HealthPlus was exceptional. The doctors were attentive, and the staff was incredibly supportive throughout my recovery.",
      name: "James Wilson",
      role: "Patient"
    },
    {
      content: "I was impressed by how quickly I was able to get an appointment and the quality of care I received. The facilities are state-of-the-art.",
      name: "Sarah Thompson",
      role: "Patient"
    },
    {
      content: "The pediatric department made my son feel comfortable during a stressful time. We're grateful for their expertise and compassion.",
      name: "Michael Davis",
      role: "Parent"
    },
  ];
  
  const stats = [
    { value: "50+", label: "Specialist Doctors" },
    { value: "25k+", label: "Satisfied Patients" },
    { value: "15+", label: "Years of Experience" },
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
                src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Modern hospital facility" 
                className="rounded-lg shadow-medium object-cover h-full w-full"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Excellence in Healthcare Since 1995</h2>
              <p className="text-gray-700 mb-6">
                For over 25 years, HealthPlus Hospital has been at the forefront of medical excellence, providing compassionate care and cutting-edge treatments to our community. Our mission is to improve the health and wellbeing of the individuals and communities we serve.
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
      
      {/* Appointment Section */}
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
              Call Now: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;