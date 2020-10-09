import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnimatedList } from 'react-animated-list';

import ContentInput from '../content-input/content-input.component';
import ProfessionalExpSection from '../professional-exp-section/professional-exp-section.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './professional-experience.style.css';

const ProfessionalExp = ({ mainColor }) => {
  // const [profExpSections, setProfExpSections] = useState([
  //   {
  //     id: 1,
  //     position: null,
  //     company: null,
  //     description: null,
  //   },
  // ]);
  const [profExpSections, setProfExpSections] = useState(2);

  const style = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const handleAddClick = (e) => {
    setProfExpSections(profExpSections + 1);
  };

  const handleRemoveClick = (e) => {
    setProfExpSections(profExpSections - 1);
  };

  return (
    <div className="professionalExperience">
      <ContentInput
        placeholder="Professional Experience"
        content="Professional Experience"
        style={style}
      />

      <div className="professionalExperience__sub">
        <AnimatedList animation={'fade'}>
          {[...Array(profExpSections).keys()]?.map((_i) => (
            <ProfessionalExpSection
              key={_i}
              id={_i}
              length={profExpSections}
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

export default connect(mapStateToProps)(ProfessionalExp);
