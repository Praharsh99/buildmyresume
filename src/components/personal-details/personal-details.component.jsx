import React from 'react';

import ContentInput from '../content-input/content-input.component';

import './personal-details.styles.css';

const PersonalDetails = () => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    color: '#bb3d76',
    fontSize: '18px',
    fontWeight: '700',
  };

  const style3 = {
    fontSize: '14px',
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
        <div className="personalDetails__section">
          <ContentInput
            placeholder="Birth Date"
            content="Birth Date"
            style={style2}
          />

          <ContentInput placeholder="Enter your birth date" style={style3} />
        </div>

        <div className="personalDetails__section">
          <ContentInput
            placeholder="Nationality"
            content="Nationality"
            style={style2}
          />

          <ContentInput placeholder="Enter your nationality" style={style3} />
        </div>

        <div className="personalDetails__section">
          <ContentInput
            placeholder="Address"
            content="Address"
            style={style2}
          />

          <ContentInput placeholder="Enter your address" style={style3} />
        </div>

        <div className="personalDetails__section">
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

export default PersonalDetails;
