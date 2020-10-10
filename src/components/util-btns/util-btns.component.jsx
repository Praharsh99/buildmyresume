import React from 'react';
import { connect } from 'react-redux';

import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './util-btns.style.css';

const UtilBtns = ({ mainColor, ...otherProps }) => {
  const {
    isOne,
    id,
    handleAddClick,
    handleRemoveClick,
    handleSortDownClick,
    handleSortUpClick,
    cantMoveUp,
    cantMoveDown,
  } = otherProps;

  const style = {
    background: mainColor,
  };

  return (
    <div className="utilBtns">
      {!isOne && (
        <>
          <IconButton
            style={style}
            onClick={(e) => {
              handleRemoveClick(e, id);
            }}
            title="Remove"
          >
            <RemoveIcon />
          </IconButton>

          {!cantMoveDown && (
            <IconButton
              style={style}
              title="Move Down"
              onClick={(e) => {
                handleSortDownClick(e, id);
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}

          {!cantMoveUp && (
            <IconButton
              style={style}
              title="Move Up"
              onClick={(e) => {
                handleSortUpClick(e, id);
              }}
            >
              <ExpandLessIcon />
            </IconButton>
          )}
        </>
      )}

      <IconButton style={style} onClick={handleAddClick} title="Add">
        <AddIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(UtilBtns);
