import React, { useEffect, useRef } from 'react';

import Body from '../body/body.component';
import Header from '../header/header.component';

import './resume.styles.css';

const Resume = () => {
  const resumeRef = useRef(null);

  // useEffect(() => {
  //   const { clientHeight, scrollHeight } = resumeRef.current;
  //   setInterval(() => {
  //     console.log(clientHeight, scrollHeight);
  //   }, 3000);
  // });

  return (
    <div className="resume" ref={resumeRef}>
      <Header />
      <Body />
    </div>
  );
};

export default Resume;
