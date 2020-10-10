import React, { useRef } from 'react';

import Body from '../body/body.component';
import Header from '../header/header.component';

import './resume.styles.css';

const Resume = () => {
  const resumeRef = useRef(null);

  return (
    <div className="resume" ref={resumeRef}>
      <Header />
      <Body />
    </div>
  );
};

export default Resume;
