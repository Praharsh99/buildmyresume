import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import UtilBtns from '../util-btns/util-btns.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './professional-exp-section.style.css';

const ProfessionalExpSection = ({
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
  };

  return (
    <div className="professionalExperience__section">
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

      <div className="professionalExperience__timelineDot" style={style1}></div>

      <ContentInput
        placeholder="Position"
        placeholderBold
        id="position"
        style={style2}
      />

      <ContentInput
        placeholder="Company Name"
        placeholderSemiBold
        id="company"
        style={style3}
      />

      <ContentInput
        placeholder="In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer."
        placeholderSemiBold
        id="description"
        style={style4}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(ProfessionalExpSection);
