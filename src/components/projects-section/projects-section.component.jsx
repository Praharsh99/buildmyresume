import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import UtilBtns from '../util-btns/util-btns.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './projects-section.style.css';

const ProjectSection = ({
  mainColor,
  id,
  length,
  handleAddClick,
  handleRemoveClick,
}) => {
  const style1 = {
    fontSize: '18px',
    color: `${mainColor}`,
    fontWeight: '700',
  };

  const style2 = {
    fontSize: '14px',
    fontWeight: '400',
  };

  const style3 = {
    fontSize: '14px',
    fontWeight: '400',
    padding: '3px 5px',
  };

  return (
    <div className="projects__section">
      <UtilBtns
        isOne={length === 1 ? true : false}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />

      <div className="projects__sectionName">
        <ContentInput
          placeholder="Project Name"
          placeholderBold
          style={style1}
        />

        <div>
          <img
            src="https://img.icons8.com/color/50/000000/react-native.png"
            alt="react"
          />
        </div>
      </div>

      <ContentInput placeholder="Subtitle" placeholderSemiBold style={style2} />

      <ContentInput
        placeholder="Give a short description about your project like, main functionality, features to lookout for, languages and tools used, and any website links"
        style={style3}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(ProjectSection);
