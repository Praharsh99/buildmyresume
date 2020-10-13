import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';

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

  const cleanupFunction = (nodes) => {
    nodes.map((node) => node.removeAttribute('style'));
  };

  const handleDownload = () => {
    const rightBar = document.getElementById('rightBar');
    const languageAdd = document.getElementById('language-add');
    var node = document.getElementById('resume');

    node.style.width = 'auto';
    node.style.height = 'auto';
    node.style.padding = '50px 60px';
    node.style.paddingRight = '30px';

    rightBar.style.marginLeft = '-100px';
    languageAdd.style.display = 'none';

    var options = {
      cacheBust: true,
      width: '1190',
      height: '1684',
    };

    domtoimage
      .toPng(node, options)
      .then(function (dataUrl) {
        node.removeAttribute('style');

        var doc = new jsPDF();
        var img = new Image();
        img.src = dataUrl;
        doc.addImage(img, 'PNG', 0, 0, 230, 330);
        doc.save('buildmyresume.pdf');

        cleanupFunction([node, rightBar, languageAdd]);
      })
      .catch(function (error) {
        cleanupFunction([node, rightBar, languageAdd]);
        alert('oops, something went wrong! Try again');
      });
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
