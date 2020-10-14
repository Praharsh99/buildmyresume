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
  selectOverflowAlert,
  selectFontSize,
} from '../../redux/resume/resume.selectors';

import {
  setMainColor,
  setMainFont,
  setPreviewImageUrl,
  toggleLoader,
  setNewFontSize,
} from '../../redux/resume/resume.actions';

import './tool-bar.styles.css';

const ToolBar = ({
  mainColor,
  fontSize,
  setNewMainColor,
  setNewMainFont,
  setPreviewImage,
  toggleLoaderComponent,
  overflowAlert,
  setNewFontSize,
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

  const handleFontSizeChange = (e) => {
    if (e.target.tagName.toLowerCase() === 'span') {
      setNewFontSize(e.target.id);
    }
  };

  const cleanupFunction = (nodes) => {
    nodes.map((node) => node.removeAttribute('style'));
  };

  const handlePreviewClick = (e) => {
    if (!overflowAlert) {
      // Scrolling to top
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      toggleLoaderComponent();

      const rightBar = document.getElementById('rightBar');
      const languageAdd = document.getElementById('language-add');
      const node = document.getElementById('resume');

      node.style.width = 'auto';
      node.style.height = 'auto';
      node.style.padding = '50px 60px';
      node.style.paddingRight = '40px';

      languageAdd.style.display = 'none';
      rightBar.style.marginLeft = '-60px';

      const options = {
        cacheBust: true,
        width: '1190',
        height: '1684',
        dpi: 96 * 6,
      };

      domtoimage
        .toPng(node, options)
        .then(function (dataUrl) {
          setPreviewImage(dataUrl);

          cleanupFunction([node, rightBar, languageAdd]);
        })
        .catch(function (error) {
          cleanupFunction([node, rightBar, languageAdd]);

          toggleLoaderComponent();

          alert('oops, something went wrong! Try again');
        });
    } else {
      alert(
        'Maximum height of the resumè crossed, please remove some sections and try downloading!'
      );
    }
  };

  return (
    <div className="toolBar">
      {/* 1st part */}
      <div className="toolBar__editing">
        {/* Color Selection */}
        <div className="toolBar__color">
          <span
            style={{ backgroundColor: mainColor }}
            onClick={toggleColorDropdown}
          ></span>
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
          <div onClick={handleFontSizeChange}>
            <span
              id="small"
              title="Small"
              className={
                fontSize === 'small' ? 'toolBar__textSize--selected' : undefined
              }
            >
              A
            </span>
            <span
              id="medium"
              title="Medium"
              className={
                fontSize === 'medium'
                  ? 'toolBar__textSize--selected'
                  : undefined
              }
            >
              A
            </span>
            <span
              id="large"
              title="Large"
              className={
                fontSize === 'large' ? 'toolBar__textSize--selected' : undefined
              }
            >
              A
            </span>
          </div>

          <div className="toolBar__title">Text Size</div>
        </div>

        {/* Sections Dropdown */}
        <div className="toolBar__sections toolBar__similar">
          <DashboardIcon onClick={toggleSectionDropdown} />

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
        <div className="toolBar__save toolBar__similar toolbar__underDevelopment">
          <SaveIcon />

          <div className="toolBar__title">Save</div>
        </div>

        {/* Load Section */}
        <div className="toolBar__load toolBar__similar toolbar__underDevelopment">
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
  overflowAlert: selectOverflowAlert(state),
  fontSize: selectFontSize(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNewMainColor: (color) => dispatch(setMainColor(color)),
  setNewMainFont: (font) => dispatch(setMainFont(font)),
  setPreviewImage: (dataUrl) => dispatch(setPreviewImageUrl(dataUrl)),
  toggleLoaderComponent: () => dispatch(toggleLoader()),
  setNewFontSize: (size) => dispatch(setNewFontSize(size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
