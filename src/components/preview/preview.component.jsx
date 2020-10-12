import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { jsPDF } from 'jspdf';

import GetAppIcon from '@material-ui/icons/GetApp';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  selectMainColor,
  selectPreviewImageUrl,
} from '../../redux/resume/resume.selectors';

import {
  setPreviewImageUrl,
  toggleLoader,
} from '../../redux/resume/resume.actions';

import './preview.style.css';

const Preview = ({
  mainColor,
  previewImage,
  setPreviewImage,
  toggleLoaderComponent,
}) => {
  useEffect(() => {
    setTimeout(() => {
      // Removing loader
      toggleLoaderComponent();

      // Scrolling to top
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      // Other stuff
      document.body.style.overflow = '';
      document.getElementById('preview').classList.add('preview__animate');
    }, 3000);
  });

  const style = {
    backgroundColor: mainColor,
  };

  const handleClick = () => {
    var node = document.getElementById('resume');
    node.removeAttribute('style');

    setPreviewImage(null);
  };

  const handleDownload = () => {
    var node = document.getElementById('resume-preview');

    var doc = new jsPDF();
    doc.addImage(node, 'PNG', 0, 0, 210, 305);
    doc.save('buildmyresume.pdf');
  };

  return (
    <div className="preview" id="preview">
      <div className="preview__downloadBtn" onClick={handleDownload}>
        <GetAppIcon style={style} />
      </div>

      <div className="preview__goBack" onClick={handleClick}>
        <ArrowBackIcon />
      </div>

      <img id="resume-preview" src={previewImage} alt="Preview" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  previewImage: selectPreviewImageUrl(state),
});

const mapDispatchToProps = (dispatch) => ({
  setPreviewImage: (imageUrl) => dispatch(setPreviewImageUrl(imageUrl)),
  toggleLoaderComponent: () => dispatch(toggleLoader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
