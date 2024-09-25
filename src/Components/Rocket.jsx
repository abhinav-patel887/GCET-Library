// Rocket.js
import React from 'react';
import './Rocket.css';

const rockets = [
  '🚀', // Rocket emoji
  '🛸', // UFO emoji
  '🛰️', // Satellite emoji
];

const Rocket = () => {
  const randomIndex = Math.floor(Math.random() * rockets.length);
  const rocketEmoji = rockets[randomIndex];

  return (
    <div className="rocket">
      {rocketEmoji}
    </div>
  );
};

export default Rocket;
