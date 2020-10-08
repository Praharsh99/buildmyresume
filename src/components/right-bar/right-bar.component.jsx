import React from 'react';

import Education from '../education/education.component';
import ProfessionalExp from '../professional-experience/professional-experience.component';

import './right-bar.styles.css';

const RightBar = () => {
  return (
    <div className="rightBar">
      <ProfessionalExp />

      <Education />
    </div>
  );
};

export default RightBar;
