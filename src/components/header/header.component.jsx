import React from 'react';
import { connect } from 'react-redux';

import ProfilePicture from '../profile-picture/profile-picture.component';
import ContentInput from '../content-input/content-input.component';

import {
  selectMainColor,
  selectSections,
} from '../../redux/resume/resume.selectors';

import './header.styles.css';

const Header = ({ mainColor, sectionData }) => {
  const style1 = {
    fontWeight: '600',
    color: `${mainColor}`,
  };

  const style2 = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '20px',
  };

  return (
    <div className="header">
      <ProfilePicture
        className={!sectionData['picture'] && 'section--disabled'}
      />

      <div className="header__details">
        <ContentInput placeholderBold placeholder="Your Name" style={style1} />

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
});

export default connect(mapStateToProps)(Header);
