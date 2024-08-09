'use client'
import React, { useState } from 'react';
// import './Button.css'; // Import the CSS file

const Button = ({ children }) => {
  const [circleStyle, setCircleStyle] = useState({});

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircleStyle({
      top: `${y}px`,
      left: `${x}px`,
      transform: 'scale(0)',
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircleStyle({
      top: `${y}px`,
      left: `${x}px`,
      transform: 'scale(1)',
    });
  };

  const handleMouseLeave = () => {
    setCircleStyle({});
  };

  return (
    <button
      className="circle-button"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="button-text">{children}</span>
      <span className="circle" style={circleStyle}></span>
    </button>
  );
};

export default Button;
