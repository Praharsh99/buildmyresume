import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Resume from './components/resume/resume.component';
import ToolBar from './components/tool-bar/tool-bar.component';

import { selectMainColor } from './redux/resume/resume.selectors';

import './App.css';

function App({ mainColor }) {
  useEffect(() => {
    document.body.style.backgroundColor = mainColor;
  }, [mainColor]);

  return (
    <div className="app">
      <ToolBar />
      <Resume />
    </div>
  );
}

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(App);
