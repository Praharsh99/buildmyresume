import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import Modal from '../modal/modal.component';
import SkillsSection from '../skills-section/skills-section.component';

import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';

import { selectMainColor } from '../../redux/resume/resume.selectors';
import { addNewSkill } from '../../redux/resume/resume.actions';

import Logos from '../../assets/logos';

import './skills.style.css';

const Skills = ({ addNewSkill, mainColor, className }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleLanguageModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleClick = (logo) => {
    addNewSkill(logo);
  };

  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    color: mainColor,
  };

  return (
    <div className={`skills ${className}`}>
      <ContentInput
        placeholder="Technical Skills"
        style={style1}
        content="Technical Skills"
      />

      <div className="skills__sub">
        <SkillsSection />

        <IconButton onClick={handleLanguageModal} id="language-add">
          <AddBoxIcon style={style2} />
        </IconButton>
      </div>

      {toggleModal && (
        <Modal handleClose={handleLanguageModal}>
          <h1>Choose your skills</h1>

          <br />
          <br />

          <div className="skills__languageLogos">
            {Logos?.map((logo, idx) => (
              <IconButton
                key={idx}
                title={logo.language}
                onClick={(e) => {
                  handleClick(logo);
                }}
              >
                <img src={logo.src} alt={logo.language} />
              </IconButton>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewSkill: (skill) => dispatch(addNewSkill(skill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
