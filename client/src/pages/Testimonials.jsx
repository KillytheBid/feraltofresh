import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import {
  testimonials,
  beforeAfterGallery,
  testimonialCategories,
} from '../data/siteData';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === selectedCategory);

  const categoryOptions = testimonialCategories;

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-green-400 text-white py-16">
        <h1 className="text-5xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-lg text-green-50">
          See the difference Feral2Fresh makes in real spaces
        </p>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-dark">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedCategory(option.value)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === option.value
                    ? 'bg-primary text-white'
                    : 'bg-light text-dark hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((testimonial) => (
            <Card key={testimonial.id} className="border-l-4 border-primary">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
              </div>
            </Card>
          ))}
        </div>
      </Section>


      {false &&<Section className="bg-light py-20">
        <h2 className="section-title">Before & After Gallery</h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Real transformations from real projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterGallery.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-48 flex items-center justify-center mb-4 rounded text-6xl">
                ✨
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              {/* <p className="text-sm text-primary font-semibold mt-4">
                Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p> */}
            </Card>
          ))}
        </div>
      </Section>}

      {/* Statistics */}
      {/* <Section className="bg-white py-20">
        <h2 className="section-title">By the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <Card hover={false}>
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600 font-medium">Satisfied Clients</p>
          </Card>
          <Card hover={false}>
            <div className="text-5xl font-bold text-primary mb-2">1000+</div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </Card>
          <Card hover={false}>
            <div className="text-5xl font-bold text-primary mb-2">5★</div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </Card>
          <Card hover={false}>
            <div className="text-5xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600 font-medium">Repeat Rate</p>
          </Card>
        </div>
      </Section> */}
    </>
  );
};

export default Testimonials;
