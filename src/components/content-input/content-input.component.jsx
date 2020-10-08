import React from 'react';

import './content-input.styles.css';

const ContentInput = ({
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
        {...otherProps}
      >
        {content}
      </p>
    </div>
  );
};

export default ContentInput;
