import React from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ContentInput from '../content-input/content-input.component';

import {
  selectMainColor,
  selectSections,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './personal-details.styles.css';

const PersonalDetails = ({ mainColor, sectionData, fontSize }) => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    color: `${mainColor}`,
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: '700',
  };

  const style3 = {
    fontSize: `${14 + getTheVariableFontValue(fontSize)}px`,
    padding: '2px 5px',
  };

  return (
    <div className="personalDetails">
      <ContentInput
        placeholder="Personal Details"
        style={style1}
        content="Personal Details"
      />

      <div className="personalDetails__sub">
        <div
          className={`personalDetails__section ${
            !sectionData['birthdate'] && 'section--disabled'
          }`}
        >
          <ContentInput
            placeholder="Birth Date"
            content="Birth Date"
            style={style2}
          />

          <ContentInput placeholder="Enter your birth date" style={style3} />
        </div>

        <div
          className={`personalDetails__section ${
            !sectionData['nationality'] && 'section--disabled'
          }`}
        >
          <ContentInput
            placeholder="Nationality"
            content="Nationality"
            style={style2}
          />

          <ContentInput placeholder="Enter your nationality" style={style3} />
        </div>

        <div
          className={`personalDetails__section ${
            !sectionData['address'] && 'section--disabled'
          }`}
        >
          <ContentInput
            placeholder="Address"
            content="Address"
            style={style2}
          />

          <ContentInput placeholder="Enter your address" style={style3} />
        </div>

        <div
          className={`personalDetails__section ${
            !sectionData['martialstatus'] && 'section--disabled'
          }`}
        >
          <ContentInput
            placeholder="Martial Status"
            content="Martial Status"
            style={style2}
          />

          <ContentInput
            placeholder="Enter your martial status"
            style={style3}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  sectionData: selectSections(state),
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(PersonalDetails);
