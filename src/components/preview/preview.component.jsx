import React, { useState } from 'react';
import { connect } from 'react-redux';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  selectMainColor,
  selectPreviewImageUrl,
} from '../../redux/resume/resume.selectors';
import { setPreviewImageUrl } from '../../redux/resume/resume.actions';

import './preview.style.css';

const Preview = ({ mainColor, previewImage, setPreviewImage }) => {
  const style = {
    color: mainColor,
  };

  const handleClick = () => {
    var node = document.getElementById('resume');
    node.removeAttribute('style');

    setPreviewImage(null);
  };

  const handleDownload = () => {
    var node = document.getElementById('resume-preview');

    var options = {
      cacheBust: true,
      width: 1190,
      height: 1684,
      quality: 1,
    };

    domtoimage
      .toPng(node, options)
      .then(function (dataUrl) {
        var doc = new jsPDF();
        var img = new Image();
        img.src = dataUrl;

        img.onload = function () {
          doc.addImage(img, 'PNG', 0, 0, 210, 305);
          doc.save('buildmyresume.pdf');
        };
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div className="preview">
      <img id="resume-preview" src={previewImage} alt="Preview" />

      <div className="preview__goBack" onClick={handleClick}>
        <ArrowBackIcon style={style} />
      </div>

      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  previewImage: selectPreviewImageUrl(state),
});

const mapDispatchToProps = (dispatch) => ({
  setPreviewImage: (imageUrl) => dispatch(setPreviewImageUrl(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
