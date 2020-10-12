import React, { useState } from 'react';
import { connect } from 'react-redux';
import domtoimage from 'dom-to-image';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SaveIcon from '@material-ui/icons/Save';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';

import SectionDropdown from '../sections-dropdown/sections-dropdown.component';
import ColorDropdown from '../color-dropdown/color-dropdown.component';
import FontDropdown from '../font-dropdown/font-dropdown.component';

import {
  selectMainColor,
  selectProfilePicture,
} from '../../redux/resume/resume.selectors';

import {
  setMainColor,
  setMainFont,
  setPreviewImageUrl,
  toggleLoader,
} from '../../redux/resume/resume.actions';

import './tool-bar.styles.css';

const ToolBar = ({
  mainColor,
  setNewMainColor,
  setNewMainFont,
  setPreviewImage,
  toggleLoaderComponent,
}) => {
  const [font, setFont] = useState();
  const [colorDropdown, setColorDropdown] = useState(false);
  const [sectionDropdown, setSectionDropdown] = useState(false);

  const toggleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const toggleSectionDropdown = () => {
    setSectionDropdown(!sectionDropdown);
  };

  const handleNewColor = (e) => {
    const el = e.target;

    if (el.tagName.toLowerCase() === 'span') {
      setNewMainColor(el.id);
    }
  };

  const handleNewFont = (e) => {
    setFont(e.target.value);
    setNewMainFont(e.target.value);
  };

  const handlePreviewClick = (e) => {
    toggleLoaderComponent();
    document.body.style.overflow = 'hidden';

    var node = document.getElementById('resume');
    node.style.width = 'auto';

    var options = {
      cacheBust: true,
      width: '1250',
      height: '1684',
    };

    domtoimage
      .toPng(node, options)
      .then(function (dataUrl) {
        setPreviewImage(dataUrl);

        node.removeAttribute('style');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div className="toolBar">
      {/* 1st part */}
      <div className="toolBar__editing">
        {/* Color Selection */}
        <div className="toolBar__color" onClick={toggleColorDropdown}>
          <span style={{ backgroundColor: mainColor }}></span>
          <span className="toolBar__title">Color</span>

          {colorDropdown && <ColorDropdown handleNewColor={handleNewColor} />}
        </div>

        {/* Fonts Selection */}
        <div className="toolBar__typography">
          <FontDropdown font={font} handleNewFont={handleNewFont} />

          <span className="toolBar__title">Typography</span>
        </div>

        {/* Font Size Selection */}
        <div className="toolBar__textSize">
          <div>
            <span>A</span>
            <span>A</span>
            <span>A</span>
          </div>

          <div className="toolBar__title">Text Size</div>
        </div>

        {/* Sections Dropdown */}
        <div
          className="toolBar__sections toolBar__similar"
          onClick={toggleSectionDropdown}
        >
          <DashboardIcon />

          <div className="toolBar__title">Sections</div>

          {sectionDropdown && (
            <div className="toolBar__sectionDropdown">
              <SectionDropdown />
            </div>
          )}
        </div>
      </div>

      {/* 2nd part */}
      <div>
        {/* Save Section */}
        <div className="toolBar__save toolBar__similar">
          <SaveIcon />

          <div className="toolBar__title">Save</div>
        </div>

        {/* Load Section */}
        <div className="toolBar__load toolBar__similar">
          <BackupIcon />

          <div className="toolBar__title">Load</div>
        </div>
      </div>

      {/* 3rd part */}
      <div>
        <div
          className="toolBar__download toolBar__utils"
          style={{ background: mainColor }}
          onClick={handlePreviewClick}
        >
          <GetAppIcon />
          <span>Download PDF</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
  profilePicture: selectProfilePicture(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNewMainColor: (color) => dispatch(setMainColor(color)),
  setNewMainFont: (font) => dispatch(setMainFont(font)),
  setPreviewImage: (dataUrl) => dispatch(setPreviewImageUrl(dataUrl)),
  toggleLoaderComponent: () => dispatch(toggleLoader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
