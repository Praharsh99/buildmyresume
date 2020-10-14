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

      // Other stuff
      document.getElementById('preview').classList.add('preview__animate');
    }, 3000);
  });

  const style = {
    backgroundColor: mainColor,
  };

  const handleBack = () => {
    setPreviewImage(null);
  };

  const handleDownload = () => {
    var doc = new jsPDF();
    var img = new Image();

    const username = document
      .getElementById('username__field')
      .textContent.trim()
      .toLowerCase();

    img.src = previewImage;

    doc.addImage(img, 'PNG', 0, 0, 225, 330);
    doc.save(username ? `${username}'s resume.pdf` : 'buildmyresume.pdf');
  };

  return (
    <div className="preview" id="preview">
      <div className="preview__downloadBtn" onClick={handleDownload}>
        <GetAppIcon style={style} />
      </div>

      <div className="preview__goBack" onClick={handleBack}>
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
