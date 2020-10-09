import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnimatedList } from 'react-animated-list';

import ContentInput from '../content-input/content-input.component';
import EducationSection from '../education-section/education-section.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './eductation.style.css';

const Education = ({ mainColor }) => {
  const [educationSection, setEducationSection] = useState(1);

  const style = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const handleAddClick = (e) => {
    setEducationSection(educationSection + 1);
  };

  const handleRemoveClick = (e) => {
    setEducationSection(educationSection - 1);
  };

  return (
    <div className="education">
      <ContentInput placeholder="Education" content="Education" style={style} />

      <div className="education__sub">
        <AnimatedList animation={'fade'}>
          {[...Array(educationSection).keys()].map((_i) => (
            <EducationSection
              key={_i}
              id={_i}
              length={educationSection}
              handleAddClick={handleAddClick}
              handleRemoveClick={handleRemoveClick}
            />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(Education);
