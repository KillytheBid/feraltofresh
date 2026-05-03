import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import QuoteForm from '../components/QuoteForm';
import { Link } from 'react-router-dom';
import { services, testimonials } from '../data/siteData';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-green-400 text-white py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-slideUp">
              From Feral to Fresh
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-green-50 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Professional residential and commercial cleaning that transforms spaces. 
              Reliable, detail-oriented, and genuinely committed to your satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <Button variant="secondary" size="lg">
                <Link to="/services">Get Started</Link>
              </Button>
              {/* <button className="btn-outline text-lg">
                Book Now
              </button> */}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="possum.png"
                alt="Cleaning Icon"
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.1)' }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Quote Form Section */}
      <Section className="bg-gradient-to-b from-light to-white">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-4">Get Your Free Quote</h2>
          <p className="text-center text-gray-600 text-lg">
            Quick, easy, and personalized—just tell us about your space
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <QuoteForm showTitle={false} />
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-gray-600">
            From routine maintenance to complete transformations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/services" className="text-primary hover:text-green-700 font-medium">
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Preview */}
      <Section className="bg-light">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Real results from real customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} hover={false} className="border-l-4 border-primary">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/testimonials" className="btn-outline text-lg inline-block">
            See All Testimonials →
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      {/* <Section className="bg-gradient-to-r from-primary to-green-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Ready for a Fresh Start?</h2>
        <p className="text-lg mb-8 opacity-90">
          Let's transform your space. Get your personalized quote today.
        </p>
        <Button variant="secondary" size="lg">
          Book Your Clean Today
        </Button>
      </Section> */}
    </>
  );
};

export default Home;
