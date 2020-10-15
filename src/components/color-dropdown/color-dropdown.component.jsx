import React, { useEffect } from 'react';

import './color-dropdown.style.css';

const ColorDropdown = ({ handleNewColor, toggleColorDropdown }) => {
  const handleOutsideClick = (e) => {
    const node = document.getElementById('colorDropdown');

    if (!node.contains(e.target)) {
      // Clicked outside the box
      toggleColorDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="toolBar__colorDropdown"
      onClick={handleNewColor}
      id="colorDropdown"
    >
      <span id="#3083dc"></span>
      <span id="#4fb298"></span>
      <span id="#e76650"></span>
      <span id="#bb3d76"></span>
    </div>
  );
};

export default ColorDropdown;
