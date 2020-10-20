import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useBeforeunload } from 'react-beforeunload';

import Resume from './components/resume/resume.component';
import ToolBar from './components/tool-bar/tool-bar.component';
import Footer from './components/footer/footer.component';
import Preview from './components/preview/preview.component';
import Loader from './components/loader/loader.component';
import HomePage from './components/homepage/homepage.component';

import {
  selectMainColor,
  selectPreviewImageUrl,
  selectLoader,
} from './redux/resume/resume.selectors';

import { toggleLoader } from './redux/resume/resume.actions';

import './App.css';
import './assets/css/google-fonts.css';

function App({ mainColor, previewImage, loader, toggleLoader }) {
  const [loadContent, setLoadContent] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = mainColor;
  }, [mainColor]);

  useBeforeunload((event) => event.preventDefault());

  const handleClick = () => {
    toggleLoader();

    setTimeout(() => {
      toggleLoader();
      setLoadContent(true);
    }, 3000);
  };

  return (
    <div className="app">
      {loadContent ? (
        <>
          <ToolBar />
          <Resume />
          <Footer />
        </>
      ) : (
        <HomePage handleClick={handleClick} />
      )}

      {previewImage && (
        <div
          className="app__onTop app__preview"
          style={{ background: mainColor }}
        >
          <Preview />
        </div>
      )}

      {loader && (
        <div
          className="app__onTop app__loader"
          style={{ background: mainColor }}
        >
          <Loader />
        </div>
      )}

      <div className="app__smallScreenMessage">
        <h3>Not compatible for this screen size! {'😲'}</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  previewImage: selectPreviewImageUrl(state),
  loader: selectLoader(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleLoader: () => dispatch(toggleLoader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
