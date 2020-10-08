import React from 'react';

import ProfilePicture from '../profile-picture/profile-picture.component';
import ContentInput from '../content-input/content-input.component';

import './header.styles.css';

const Header = () => {
  const style1 = {
    fontWeight: '600',
    color: '#bb3d76',
  };

  const style2 = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '20px',
  };

  return (
    <div className="header">
      <ProfilePicture />

      <div className="header__details">
        <ContentInput placeholderBold placeholder="Your Name" style={style1} />

        <ContentInput
          placeholder="Your Profession or Speciality"
          placeholderSemiBold
          style={style2}
        />
      </div>
    </div>
  );
};

export default Header;
