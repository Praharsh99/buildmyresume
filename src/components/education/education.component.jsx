import React from 'react';

import ContentInput from '../content-input/content-input.component';

import './eductation.style.css';

const Education = () => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    fontSize: '18px',
    color: '#bb3d76',
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
    textAlign: 'center',
  };

  return (
    <div className="education">
      <ContentInput
        placeholder="Education"
        content="Education"
        style={style1}
      />

      <div className="education__sub">
        <div className="education__section">
          {/* TODO: Add the interaction buttons to each section */}
          <ContentInput placeholder="Degree" style={style2} />

          <div className="education__sectionSubPart">
            <ContentInput placeholder="school" placeholderBold style={style3} />

            <ContentInput placeholder="From - Untill" style={style4} />
          </div>
        </div>

        <div className="education__section">
          {/* TODO: Add the interaction buttons to each section */}
          <ContentInput placeholder="Degree" style={style2} />

          <div className="education__sectionSubPart">
            <ContentInput placeholder="school" placeholderBold style={style3} />

            <ContentInput placeholder="From - Untill" style={style4} />
          </div>
        </div>

        <div className="education__section">
          {/* TODO: Add the interaction buttons to each section */}
          <ContentInput placeholder="Degree" style={style2} />

          <div className="education__sectionSubPart">
            <ContentInput placeholder="school" placeholderBold style={style3} />

            <ContentInput placeholder="From - Untill" style={style4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
