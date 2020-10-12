import React from 'react';

import './color-dropdown.style.css';

const ColorDropdown = ({ handleNewColor }) => {
  return (
    <div className="toolBar__colorDropdown" onClick={handleNewColor}>
      <span id="#3083dc"></span>
      <span id="#4fb298"></span>
      <span id="#e76650"></span>
      <span id="#bb3d76"></span>
    </div>
  );
};

export default ColorDropdown;
