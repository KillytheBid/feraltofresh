import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-green-400 text-white py-16">
        <h1 className="text-5xl font-bold mb-4">About Feral2Fresh</h1>
        <p className="text-lg text-green-50">
          Built on commitment, precision, and genuine care for every space
        </p>
      </Section>

      {/* Main Content */}
      <Section className="bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-dark">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Feral2Fresh, we believe every space deserves a fresh start. Founded by Alanna Manning, 
              the business was built on a commitment to reliability, detail, and genuine care for clients' 
              homes and workplaces.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We specialize in turning overlooked, cluttered, or heavily used spaces into clean, comfortable 
              environments you can feel proud of. Whether it's a home, office, or commercial property, 
              we approach every job with the same level of precision and professionalism.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: deliver consistent, high-quality cleaning that makes a noticeable 
              difference every time.
            </p>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary to-green-400 rounded-lg flex items-center justify-center text-8xl shadow-lg">
              👩‍💼
            </div>
          </div> */}
        </div>

        {/* Founder Section */}
        <div className="border-t pt-12">
          <h2 className="text-4xl font-bold mb-8 text-dark text-center">Meet the Founder</h2>
          <Card className="max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-96 h-96 mx-auto mb-6 bg-gradient-to-br from-primary to-green-400 rounded-full flex items-center justify-center text-6xl shadow-lg">
              <img
                src="../public/founder_selfie.jpeg"
                alt="Alanna Manning"
                className="w-full h-full object-cover rounded-full"
              />
              </div>
              <h3 className="text-3xl font-bold text-dark mb-2">Alanna Manning</h3>
              <p className="text-xl text-primary font-semibold mb-4">Founder & Owner</p>
              <p className="text-gray-700 leading-relaxed">
                Alanna founded Feral2Fresh with a passion for transforming spaces and building lasting 
                relationships with clients. With years of experience in professional cleaning, her 
                commitment to excellence ensures that every project is treated with the utmost care and attention.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Mission Section */}
      {/* <Section className="bg-light py-20">
        <h2 className="section-title">Our Mission</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-primary text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Deliver consistent, high-quality cleaning that makes a noticeable difference—every time.
            </h3>
            <p className="text-lg text-gray-700">
              We're not just cleaners—we're partners in creating spaces where you feel comfortable and proud. 
              Every attention to detail, every extra mile, and every follow-up is driven by our commitment 
              to your satisfaction and trust.
            </p>
          </Card>
        </div>
      </Section> */}

      {/* Values Section */}
      {/* <Section className="bg-white py-20">
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-dark mb-3">Reliability</h3>
            <p className="text-gray-700">
              You can count on us to show up, deliver, and exceed expectations every single time.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-dark mb-3">Detail-Oriented</h3>
            <p className="text-gray-700">
              We don't cut corners. Every edge, surface, and corner gets the attention it deserves.
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-dark mb-3">Genuine Care</h3>
            <p className="text-gray-700">
              We treat your space like it's our own, with respect and a commitment to excellence.
            </p>
          </Card>
        </div>
      </Section> */}
    </>
  );
};

export default About;
