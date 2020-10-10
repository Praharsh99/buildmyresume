import React from 'react';
import { connect } from 'react-redux';

import SectionRow from '../section-row/section-row.component';

import { selectSections } from '../../redux/resume/resume.selectors';
import { toggleSection } from '../../redux/resume/resume.actions';

import './sections-dropdown.style.css';

const SectionDropdown = ({ sectionsData, toggleSection }) => {
  const handleChange = (e) => {
    const { name } = e.target;

    toggleSection(name);
  };

  return (
    <div className="sectionDropdown">
      <div className="sectionDropdown__left">
        {/* Left 1st part */}
        <div className="sectionDropdown__section">
          <SectionRow
            value={sectionsData?.picture}
            name="picture"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.profile}
            name="profile"
            otherName="profile / objective"
            handleChange={handleChange}
          />
        </div>

        {/* Left 2nd part */}
        <div className="sectionDropdown__section">
          <SectionRow
            name="birthdate"
            disabled
            value={sectionsData?.birthdate}
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.address}
            name="address"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.nationality}
            name="nationality"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.martialstatus}
            name="martialstatus"
            otherName="martial status"
            handleChange={handleChange}
          />
        </div>

        {/* Left 3rd part */}
        <div className="sectionDropdown__section">
          <SectionRow
            name="email"
            disabled
            value={sectionsData?.email}
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.mobile}
            name="mobile"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.linkedin}
            name="linkedin"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.github}
            name="github"
            handleChange={handleChange}
          />
          <SectionRow
            value={sectionsData?.portfolio}
            name="portfolio"
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="sectionDropdown__right">
        {/* Right 1st part */}
        <div className="sectionDropdown__section">
          <SectionRow
            name="name"
            value={sectionsData?.name}
            disabled
            handleChange={handleChange}
          />
          <SectionRow
            name="profession"
            value={sectionsData?.profession}
            handleChange={handleChange}
          />
        </div>

        {/* Right 2nd part */}
        <div className="sectionDropdown__section">
          <SectionRow
            name="professional"
            otherName="professional experience"
            value={sectionsData?.professional}
            handleChange={handleChange}
          />
          <SectionRow
            name="projects"
            otherName="personal projects"
            value={sectionsData?.projects}
            handleChange={handleChange}
          />
          <SectionRow
            name="education"
            value={sectionsData?.education}
            disabled
            handleChange={handleChange}
          />
          <SectionRow
            name="skills"
            value={sectionsData?.skills}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sectionsData: selectSections(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleSection: (sectionName) => dispatch(toggleSection(sectionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionDropdown);
