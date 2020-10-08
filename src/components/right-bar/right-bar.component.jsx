import React from 'react';

import Education from '../education/education.component';
import ProfessionalExp from '../professional-experience/professional-experience.component';
import Projects from '../projects/projects.component';
import Skills from '../skills/skills.component';

import './right-bar.styles.css';

const RightBar = () => {
  return (
    <div className="rightBar">
      <ProfessionalExp />

      <Education />

      <Projects />

      <Skills />
    </div>
  );
};

export default RightBar;
