// Stars.js
import React from 'react';
import './Stars.css'; // Ensure your CSS is in the same folder

const Stars = () => {
  return (
    <div className="stars">
      {/* Dynamic falling stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="star" />
      ))}
      {/* Fixed twinkling stars */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={`fixed-${index}`} className="fixed-star" />
      ))}
    </div>
  );
};

export default Stars;
