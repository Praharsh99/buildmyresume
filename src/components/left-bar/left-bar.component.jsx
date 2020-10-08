import React from 'react';

import PersonalDetails from '../personal-details/personal-details.component';
import Contact from '../contact/contact.component';

import './left-bar.styles.css';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <PersonalDetails />

      <Contact />
    </div>
  );
};

export default LeftBar;
