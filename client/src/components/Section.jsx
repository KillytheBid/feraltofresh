import React from 'react';

const Section = ({ children, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
