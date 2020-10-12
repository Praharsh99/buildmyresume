import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useBeforeunload } from 'react-beforeunload';

import Resume from './components/resume/resume.component';
import ToolBar from './components/tool-bar/tool-bar.component';
import Footer from './components/footer/footer.component';
import Preview from './components/preview/preview.component';
import Loader from './components/loader/loader.component';

import {
  selectMainColor,
  selectPreviewImageUrl,
  selectLoader,
} from './redux/resume/resume.selectors';

import './App.css';

function App({ mainColor, previewImage, loader }) {
  useEffect(() => {
    document.body.style.backgroundColor = mainColor;
  }, [mainColor]);

  // useBeforeunload((event) => event.preventDefault());

  return (
    <div className="app">
      <ToolBar />
      <Resume />
      <Footer />

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
    </div>
  );
}

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  previewImage: selectPreviewImageUrl(state),
  loader: selectLoader(state),
});

export default connect(mapStateToProps)(App);
