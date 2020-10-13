import React from 'react';

import Objective from '../objective/objective.component';
import PersonalDetails from '../personal-details/personal-details.component';
import Contact from '../contact/contact.component';

import './left-bar.styles.css';

const LeftBar = () => {
  return (
    <div className="leftBar" id="leftBar">
      <Objective />

      <PersonalDetails />

      <Contact />
    </div>
  );
};

export default LeftBar;
