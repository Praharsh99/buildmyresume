import React from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ProfilePicture from '../profile-picture/profile-picture.component';
import ContentInput from '../content-input/content-input.component';

import {
  selectMainColor,
  selectSections,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './header.styles.css';

const Header = ({ mainColor, sectionData, fontSize }) => {
  const style1 = {
    fontWeight: '600',
    color: `${mainColor}`,
    fontSize: `${56 + getTheVariableFontValue(fontSize)}px`,
  };

  const style2 = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: `${20 + getTheVariableFontValue(fontSize)}px`,
  };

  return (
    <div className="header">
      <ProfilePicture
        className={!sectionData['picture'] && 'section--disabled'}
      />

      <div className="header__details">
        <ContentInput
          placeholderBold
          id="username__field"
          placeholder="Your Name"
          style={style1}
        />

        <ContentInput
          placeholder="Your Profession or Speciality"
          placeholderSemiBold
          style={style2}
          className={!sectionData['profession'] && 'section--disabled'}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  sectionData: selectSections(state),
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(Header);
