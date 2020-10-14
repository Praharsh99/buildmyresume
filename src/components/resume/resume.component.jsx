import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import Body from '../body/body.component';
import Header from '../header/header.component';

import { selectOverflowAlert } from '../../redux/resume/resume.selectors';
import { setOverflowAlert } from '../../redux/resume/resume.actions';

import './resume.styles.css';

const Resume = ({ overflowAlert, setOverflowAlert }) => {
  const [alertHeight, setAlertHeight] = useState(0);
  const resumeRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (resumeRef.current.clientHeight > 1684) {
        setAlertHeight(resumeRef.current.clientHeight - 1684);
        alert(
          'Maximum height of the resumè crossed, please remove some sections!'
        );

        if (!document.getElementById('resume__overflowAlert')) {
          setOverflowAlert();
        }
      } else if (
        resumeRef.current.clientHeight <= 1684 &&
        document.getElementById('resume__overflowAlert')
      ) {
        setOverflowAlert();
      }
    });

    resizeObserver.observe(resumeRef.current);
  }, [setOverflowAlert]);

  const style = {
    height: `${alertHeight + 15}px`,
  };

  return (
    <div className="resume" ref={resumeRef} id="resume">
      <Header />
      <Body />

      {overflowAlert && (
        <div
          className="resume__overflowAlert"
          id="resume__overflowAlert"
          style={style}
        ></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  overflowAlert: selectOverflowAlert(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOverflowAlert: () => dispatch(setOverflowAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
