import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './professional-experience.style.css';

const ProfessionalExp = ({ mainColor }) => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    fontSize: '18px',
    color: `${mainColor}`,
    fontWeight: '700',
  };

  const style3 = {
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '600',
    padding: '2px 5px',
  };

  const style4 = {
    fontSize: '14px',
    fontWeight: '400',
    padding: '3px 5px',
  };

  const style5 = {
    backgroundColor: `${mainColor}`,
  };

  return (
    <div className="professionalExperience">
      <ContentInput
        placeholder="Professional Experience"
        content="Professional Experience"
        style={style1}
      />

      <div className="professionalExperience__sub">
        <div className="professionalExperience__section">
          {/* TODO: Add the interaction buttons to each section */}
          <div
            className="professionalExperience__timelineDot"
            style={style5}
          ></div>

          <ContentInput placeholder="Position" placeholderBold style={style2} />

          <ContentInput
            placeholder="Company Name"
            placeholderSemiBold
            style={style3}
          />

          <ContentInput
            placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer."
            style={style4}
            placeholderSemiBold
          />
        </div>

        <div className="professionalExperience__section">
          {/* TODO: Add the interaction buttons to each section */}
          <div
            className="professionalExperience__timelineDot"
            style={style5}
          ></div>

          <ContentInput placeholder="Position" placeholderBold style={style2} />

          <ContentInput
            placeholder="Company Name"
            placeholderSemiBold
            style={style3}
          />

          <ContentInput
            placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer."
            style={style4}
            placeholderSemiBold
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(ProfessionalExp);
