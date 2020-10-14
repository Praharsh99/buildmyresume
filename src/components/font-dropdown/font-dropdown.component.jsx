import React from 'react';

import './font-dropdown.style.css';

const FontDropdown = ({ font, handleNewFont }) => {
  return (
    <select value={font} onChange={handleNewFont}>
      <option value="Poppins">Poppins</option>
    </select>
  );
};

export default FontDropdown;

// <option value="Raleway" disabled>
//         Raleway
//       </option>
//       <option value="Barlow" disabled>
//         Barlow
//       </option>
//       <option value="Lato" disabled>
//         Lato
//       </option>
//       <option value="Nunito" disabled>
//         Nunito
//   </option>
