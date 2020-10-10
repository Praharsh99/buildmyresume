import React from 'react';
import { connect } from 'react-redux';

import Education from '../education/education.component';
import ProfessionalExp from '../professional-experience/professional-experience.component';
import Projects from '../projects/projects.component';
import Skills from '../skills/skills.component';

import { selectSections } from '../../redux/resume/resume.selectors';

import './right-bar.styles.css';

const RightBar = ({ sectionData }) => {
  return (
    <div className="rightBar">
      <ProfessionalExp
        className={!sectionData['professional'] && 'section--disabled'}
      />

      <Projects className={!sectionData['projects'] && 'section--disabled'} />

      <Education className={!sectionData['education'] && 'section--disabled'} />

      <Skills className={!sectionData['skills'] && 'section--disabled'} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  sectionData: selectSections(state),
});

export default connect(mapStateToProps)(RightBar);
