import React from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ContentInput from '../content-input/content-input.component';
import UtilBtns from '../util-btns/util-btns.component';

import {
  selectMainColor,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './projects-section.style.css';

const ProjectSection = ({
  mainColor,
  id,
  length,
  fontSize,
  position,
  handleAddClick,
  handleRemoveClick,
  handleSortDownClick,
  handleSortUpClick,
}) => {
  const style1 = {
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    color: `${mainColor}`,
    fontWeight: '700',
  };

  const style2 = {
    fontSize: `${14 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: '400',
    marginTop: '-1px',
    marginBottom: '5px',
  };

  const style3 = {
    fontSize: `${14 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: '400',
    padding: '3px 5px',
  };

  return (
    <div className="projects__section">
      <UtilBtns
        isOne={length === 1 ? true : false}
        cantMoveDown={length - 1 === position ? true : false}
        cantMoveUp={position === 0 ? true : false}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
        handleSortDownClick={handleSortDownClick}
        handleSortUpClick={handleSortUpClick}
        id={id}
      />

      <ContentInput placeholder="Project Name" placeholderBold style={style1} />

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
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(ProjectSection);
