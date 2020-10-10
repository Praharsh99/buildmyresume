import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import UtilBtns from '../util-btns/util-btns.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './education-section.style.css';

const EducationSection = ({
  mainColor,
  id,
  length,
  position,
  handleAddClick,
  handleRemoveClick,
  handleSortDownClick,
  handleSortUpClick,
}) => {
  const style1 = {
    backgroundColor: `${mainColor}`,
  };

  const style2 = {
    fontSize: '18px',
    color: `${mainColor}`,
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
    <div className="education__section">
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

      <div className="education__timelineDot" style={style1}></div>

      <ContentInput placeholder="Degree" style={style2} />

      <div className="education__sectionSubPart">
        <ContentInput placeholder="school" placeholderBold style={style3} />

        <ContentInput placeholder="From - Untill" style={style4} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(EducationSection);
