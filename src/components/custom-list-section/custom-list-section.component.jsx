import React from 'react';
import { connect } from 'react-redux';

import { getTheVariableFontValue } from '../../assets/utils';

import UtilBtns from '../util-btns/util-btns.component';
import ContentInput from '../content-input/content-input.component';

import LabelIcon from '@material-ui/icons/Label';

import {
  selectMainColor,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import './custom-list-section.style.css';

const CustomListSection = ({
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
  const style = {
    fontSize: `${16 + getTheVariableFontValue(fontSize)}px`,
    color: `${mainColor}`,
    fontWeight: '500',
  };

  return (
    <div className="customList__section">
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

      <div className="customList__sectionItem">
        <LabelIcon />

        <ContentInput placeholder="Custom List Item" style={style} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(CustomListSection);
