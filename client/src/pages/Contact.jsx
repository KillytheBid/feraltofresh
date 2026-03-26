import React from 'react';
import Section from '../components/Section';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-green-400 text-white py-16">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-green-50">
          Questions? We'd love to help. Reach out anytime.
        </p>
      </Section>

      {/* Contact Section */}
      <Section className="bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">📧 Email</h3>
                <a
                  href="mailto:info@feral2fresh.com"
                  className="text-lg text-gray-700 hover:text-primary transition"
                >
                  info@feral2fresh.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-2">📞 Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-lg text-gray-700 hover:text-primary transition"
                >
                  (123) 456-7890
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-2">⏰ Hours</h3>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-700">Sunday: By Appointment</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-2">📍 Service Areas</h3>
                <p className="text-gray-700">Serving the greater metropolitan area</p>
                <p className="text-gray-700">Residential & Commercial Properties</p>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-light py-20">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How quickly can I get a quote?',
              a: 'We typically provide personalized quotes within 24 hours of receiving your request through our website or phone.',
            },
            {
              q: 'Do you offer eco-friendly cleaning options?',
              a: 'Yes! We offer eco-friendly cleaning products and methods upon request. Contact us to discuss sustainable options.',
            },
            {
              q: 'What areas do you serve?',
              a: 'We serve the greater metropolitan area for both residential and commercial cleaning services. Call for specific locations.',
            },
            {
              q: 'Can I customize my cleaning plan?',
              a: 'Absolutely. We work with you to create a customized cleaning plan that fits your specific needs and schedule.',
            },
            {
              q: 'How are my home or office kept secure?',
              a: 'All team members are background-checked, professional, and trained in property care and security protocols.',
            },
            {
              q: 'What if I\'m not satisfied with the cleaning?',
              a: 'We stand behind our work 100%. If you\'re not satisfied, we\'ll address any concerns immediately at no additional cost.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-dark mb-3">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Contact;
