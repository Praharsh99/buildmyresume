import React from 'react';
import { connect } from 'react-redux';

import { getTheVariableFontValue } from '../../assets/utils';

import UtilBtns from '../util-btns/util-btns.component';
import ContentInput from '../content-input/content-input.component';

import {
  selectMainColor,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './custom-paragraph-section.style.css';

const CustomParagraphSection = ({
  mainColor,
  id,
  length,
  position,
  fontSize,
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
    padding: '3px 5px',
    textAlign: 'justify',
  };

  return (
    <div className="customParagraph__section">
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

      <ContentInput placeholder="Custom Title" placeholderBold style={style1} />

      <ContentInput
        placeholder="This is the custom description area for you. Fill this area with content that goes with the heading. Please try to minimize the content that you want to display, a few bullet points are a good option"
        style={style2}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(CustomParagraphSection);
