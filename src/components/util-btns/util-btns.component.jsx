import React from 'react';
import { connect } from 'react-redux';

import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OpenWithIcon from '@material-ui/icons/OpenWith';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './util-btns.style.css';

const UtilBtns = ({ mainColor, ...otherProps }) => {
  const { isOne, handleAddClick, handleRemoveClick } = otherProps;

  const style = {
    background: mainColor,
  };

  return (
    <div className="utilBtns">
      {!isOne && (
        <>
          <IconButton style={style} onClick={handleRemoveClick}>
            <RemoveIcon />
          </IconButton>

          <IconButton style={style}>
            <OpenWithIcon />
          </IconButton>
        </>
      )}

      <IconButton style={style} onClick={handleAddClick}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(UtilBtns);
