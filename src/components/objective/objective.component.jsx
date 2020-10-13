import React from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ContentInput from '../content-input/content-input.component';

import {
  selectSections,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './objective.style.css';

const Objective = ({ sectionData, fontSize }) => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    fontSize: `${14 + getTheVariableFontValue(fontSize)}px`,
    padding: '2px 5px',
    maxWidth: '250px',
    textAlign: 'justify',
  };

  return (
    <div
      className={`objective ${
        !sectionData['objective'] && 'section--disabled'
      }`}
    >
      <ContentInput placeholder="Profile" style={style1} content="Profile" />

      <ContentInput
        placeholder="Write here a paragraph about yourself or you can change the title to read 'Objective'."
        style={style2}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  fontSize: selectFontSize(state),
  sectionData: selectSections(state),
});

export default connect(mapStateToProps)(Objective);
