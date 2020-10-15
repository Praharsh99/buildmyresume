import React from 'react';

import './font-dropdown.style.css';

const FontDropdown = ({ font, handleNewFont }) => {
  return (
    <select value={font} onChange={handleNewFont}>
      <option value="Poppins">Poppins</option>
      <option value="Raleway">Raleway</option>
      <option value="Barlow">Barlow</option>
      <option value="Lato">Lato</option>
      <option value="Nunito">Nunito</option>
      <option value="Opensans">Open Sans</option>
      <option value="Quicksand">Quicksand</option>
    </select>
  );
};

export default FontDropdown;
