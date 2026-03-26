import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      category: 'kitchens',
      text: 'Feral2Fresh completely transformed my kitchen. The grease, grime, and buildup from years of cooking—gone in a single day. The attention to detail is incredible, and they treated my home with such respect.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Lee',
      role: 'Office Manager',
      category: 'offices',
      text: 'Our office has never looked better. Professional, reliable, and on schedule every time. The team handles our monthly deep cleans with exceptional efficiency and care.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer Smith',
      role: 'Property Manager',
      category: 'commercial',
      text: 'Alanna and her team handle our multi-property portfolio with remarkable consistency. They\'re detail-oriented, professional, and always go the extra mile.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Homeowner',
      category: 'living',
      text: 'We were overwhelmed after renovations left our living room in disaster. Feral2Fresh not only cleaned everything, but organized it beautifully. Incredible service!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      category: 'offices',
      text: 'Professional cleaning for our restaurant kitchen. They understand food service standards and execute flawlessly every time.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Michael Thompson',
      role: 'Homeowner',
      category: 'kitchens',
      text: 'The move-in clean they provided when we bought our home was thorough and reasonably priced. We\'ve hired them for regular maintenance ever since.',
      rating: 5,
    },
  ];

  const beforeAfterGallery = [
    {
      category: 'kitchens',
      title: 'Kitchen Transformation',
      description: 'Heavy grease buildup on cabinets and appliances removed. Pristine, professional finish.',
    },
    {
      category: 'kitchens',
      title: 'Deep Kitchen Clean',
      description: 'Complete backsplash and stovetop restoration. Sparkling results.',
    },
    {
      category: 'living',
      title: 'Living Room Refresh',
      description: 'Carpet cleaning, furniture treatment, and full detail work.',
    },
    {
      category: 'living',
      title: 'Pre-Move Cleaning',
      description: 'Entire rental prepared for new residents. Move-ready clean.',
    },
    {
      category: 'offices',
      title: 'Office Deep Clean',
      description: 'Daily turnover, carpet cleaning, desk and conference room detail.',
    },
    {
      category: 'commercial',
      title: 'Commercial Property',
      description: 'Multi-unit complex maintained to highest standards.',
    },
  ];

  const filtered = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === selectedCategory);

  const categoryOptions = [
    { value: 'all', label: 'All Testimonials' },
    { value: 'kitchens', label: 'Kitchens' },
    { value: 'living', label: 'Living Spaces' },
    { value: 'offices', label: 'Offices & Commercial' },
  ];

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
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Before & After Gallery */}
      <Section className="bg-light py-20">
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
              <p className="text-sm text-primary font-semibold mt-4">
                Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

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
