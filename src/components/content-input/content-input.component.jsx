import React from 'react';
import { connect } from 'react-redux';

import { selectMainFont } from '../../redux/resume/resume.selectors';

import './content-input.styles.css';

const ContentInput = ({
  mainFont,
  content,
  placeholderBold,
  placeholderSemiBold,
  ...otherProps
}) => {
  return (
    <div
      className={`contentInput ${placeholderBold && 'placeholderBold'} ${
        placeholderSemiBold && 'placeholderSemiBold'
      }`}
    >
      <p
        placeholder="Placeholder Here..."
        contentEditable={true}
        className={`contentInput--${mainFont}`}
        {...otherProps}
      >
        {content}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainFont: selectMainFont(state),
});

export default connect(mapStateToProps)(ContentInput);
