import React from 'react';

import './content-input.styles.css';

const ContentInput = () => {
  return (
    <div className="contentInput">
      <p placeholder="Your Name" contentEditable={true}></p>
    </div>
  );
};

export default ContentInput;
