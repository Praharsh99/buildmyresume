import React, { useState } from 'react';
import { connect } from 'react-redux';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SaveIcon from '@material-ui/icons/Save';
import BackupIcon from '@material-ui/icons/Backup';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';

import SectionDropdown from '../sections-dropdown/sections-dropdown.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';
import { setMainColor, setMainFont } from '../../redux/resume/resume.actions';

import './tool-bar.styles.css';

const ToolBar = ({ mainColor, setNewMainColor, setNewMainFont }) => {
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

  return (
    <div className="toolBar">
      {/* 1st part */}
      <div className="toolBar__editing">
        <div className="toolBar__color">
          <span
            style={{ backgroundColor: mainColor }}
            onClick={toggleColorDropdown}
          ></span>
          <span className="toolBar__title">Color</span>

          {colorDropdown && (
            <div className="toolBar__colorDropdown" onClick={handleNewColor}>
              <span id="#3083dc"></span>
              <span id="#4fb298"></span>
              <span id="#e76650"></span>
              <span id="#bb3d76"></span>
            </div>
          )}
        </div>

        <div className="toolBar__typography">
          <select value={font} onChange={handleNewFont}>
            <option value="Poppins">Poppins</option>
            <option value="Raleway">Raleway</option>
            <option value="Barlow">Barlow</option>
            <option value="Lato">Lato</option>
            <option value="Nunito">Nunito</option>
          </select>

          <span className="toolBar__title">Typography</span>
        </div>

        <div className="toolBar__textSize">
          <div>
            <span>A</span>
            <span>A</span>
            <span>A</span>
          </div>

          <div className="toolBar__title">Text Size</div>
        </div>

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
        <div className="toolBar__save toolBar__similar">
          <SaveIcon />

          <div className="toolBar__title">Save</div>
        </div>

        <div className="toolBar__load toolBar__similar">
          <BackupIcon />

          <div className="toolBar__title">Load</div>
        </div>
      </div>

      {/* 3rd part */}
      <div>
        <div className="toolBar__preview toolBar__utils">
          <VisibilityIcon />
          <span>Preview</span>
        </div>

        <div
          className="toolBar__download toolBar__utils"
          style={{ background: mainColor }}
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
});

const mapDispatchToProps = (dispatch) => ({
  setNewMainColor: (color) => dispatch(setMainColor(color)),
  setNewMainFont: (font) => dispatch(setMainFont(font)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
