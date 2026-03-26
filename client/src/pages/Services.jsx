import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Cleaning',
      icon: '🏠',
      description: 'Professional home cleaning tailored to your family\'s needs.',
      features: [
        'Weekly, bi-weekly, or monthly service',
        'Customized cleaning plans',
        'Eco-friendly products available',
        'Flexible scheduling',
        'Trusted with your home',
      ],
      pricing: [
        { tier: 'Starter', price: '$99', description: 'Basic home cleaning' },
        { tier: 'Standard', price: '$149', description: 'Comprehensive cleaning' },
        { tier: 'Premium', price: '$199', description: 'Deep clean + extras' },
      ],
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      icon: '🏢',
      description: 'Keep your workplace clean, professional, and productive.',
      features: [
        'Office spaces & workplaces',
        'Retail locations',
        'Medical facilities',
        'Multi-unit properties',
        'Flexible scheduling (after-hours available)',
      ],
      pricing: [
        { tier: 'Small', price: 'Custom Quote', description: 'Up to 2,000 sq ft' },
        { tier: 'Medium', price: 'Custom Quote', description: '2,000 - 5,000 sq ft' },
        { tier: 'Large', price: 'Custom Quote', description: '5,000+ sq ft' },
      ],
    },
    {
      id: 3,
      title: 'Deep Clean',
      icon: '⚡',
      description: 'Thorough, intensive cleaning—from corners to baseboards.',
      features: [
        'Complete interior detail',
        'Carpet & upholstery cleaning',
        'Window & blind cleaning',
        'Grout & tile restoration',
        'Move-in/move-out ready',
      ],
      pricing: [
        { tier: 'Small Home', price: '$299', description: 'Up to 1,500 sq ft' },
        { tier: 'Medium Home', price: '$499', description: '1,500 - 3,000 sq ft' },
        { tier: 'Large Home', price: '$799', description: '3,000+ sq ft' },
      ],
    },
    {
      id: 4,
      title: 'Move-In/Move-Out',
      icon: '📦',
      description: 'Leave your old space spotless; move into a fresh environment.',
      features: [
        'Post-move cleanup',
        'Pre-move deep clean',
        'Arrival-ready preparation',
        'Turnover cleaning',
        'Detailed walk-through',
      ],
      pricing: [
        { tier: 'Standard', price: '$299', description: 'Standard property' },
        { tier: 'Large', price: '$499', description: 'Large property' },
        { tier: 'Enterprise', price: 'Custom Quote', description: 'Multi-unit/complex' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-green-400 text-white py-16">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-green-50">
          Professional cleaning tailored to your needs
        </p>
      </Section>

      {/* Services Grid */}
      <Section className="bg-white py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-blue-50 rounded-lg p-8 shadow-sm"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-4">{service.icon}</span>
                  <h2 className="text-4xl font-bold text-dark">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                <h3 className="text-xl font-bold text-dark mb-4">What's Included:</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-bold mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="primary" size="lg">
                  Get Quote for {service.title}
                </Button>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 gap-6">
                {service.pricing.map((plan, i) => (
                  <Card key={i} className="border-l-4 border-primary">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-dark">{plan.tier}</h3>
                      <span className="text-2xl font-bold text-primary">{plan.price}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-light py-20">
        <h2 className="section-title">Why Choose Feral2Fresh?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-dark mb-2">Attention to Detail</h3>
            <p className="text-gray-600">
              Every surface, corner, and edge receives precision care.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-lg font-bold text-dark mb-2">Reliable Scheduling</h3>
            <p className="text-gray-600">
              On-time service you can count on, every single visit.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">💚</div>
            <h3 className="text-lg font-bold text-dark mb-2">Professional Care</h3>
            <p className="text-gray-600">
              We treat your space with the same respect as our own.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-lg font-bold text-dark mb-2">Fair Pricing</h3>
            <p className="text-gray-600">
              Transparent quotes with no hidden fees or surprises.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary to-green-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
        <p className="text-lg mb-8 opacity-90">
          Get a personalized quote for your cleaning needs today.
        </p>
        <Button variant="secondary" size="lg">
          Get Your Free Quote
        </Button>
      </Section>
    </>
  );
};

export default Services;
