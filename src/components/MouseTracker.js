import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mousemove
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means it runs on mount and cleanup on unmount

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Mouse Position: X - {mousePosition.x}, Y - {mousePosition.y}</p>
    </div>
  );
};

export default MouseTracker;
