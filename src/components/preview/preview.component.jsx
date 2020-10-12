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
    document.getElementById('rightBar').style.marginLeft = '-100px';
    document.getElementById('language-add').style.display = 'none';
    var node = document.getElementById('resume');

    node.style.width = 'auto';
    node.style.height = 'auto';
    node.style.padding = '50px 60px';
    node.style.paddingRight = '30px';

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

        node.removeAttribute('style');
        document.getElementById('rightBar').removeAttribute('style');
        document.getElementById('language-add').removeAttribute('style');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
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
