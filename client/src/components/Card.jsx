import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover ? 'card-hover' : '';
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
