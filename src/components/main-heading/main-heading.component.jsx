import React from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ContentInput from '../content-input/content-input.component';

import { selectFontSize } from '../../redux/resume/resume.selectors';

import './main-heading.style.css';

const MainHeading = ({ fontSize, placeholder, content }) => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <ContentInput
      placeholder={placeholder || 'Some random heading'}
      content={content}
      style={style1}
    />
  );
};

const mapStateToProps = (state) => ({
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(MainHeading);
