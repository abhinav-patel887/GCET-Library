// FixedStars.js
import React from 'react';
import './FixedStars.css';

const FixedStars = () => {
  const getRandomPosition = () => ({
    top: `${Math.random() *12}rem`, // Limit stars to 0 to 5rem in height
    left: `${Math.random() * 100}vw`, // Full width
  });

  return (
    <>
      {Array.from({ length: 40 }).map((_, index) => {
        const { top, left } = getRandomPosition();
        return (
          <div
            key={`fixed-${index}`}
            className="fixed-star"
            style={{ top, left }}
          />
        );
      })}
    </>
  );
};

export default FixedStars;
