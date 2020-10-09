import React, { useState } from 'react';

import ContentInput from '../content-input/content-input.component';
import Modal from '../modal/modal.component';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';

import Logos from '../../assets/logos';

import './skills.style.css';

const Skills = () => {
  const [toggleModal, setToggleModal] = useState(true);

  const handleLanguageModal = () => {
    setToggleModal(!toggleModal);
  };

  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <div className="skills">
      <ContentInput
        placeholder="Technical Skills"
        style={style1}
        content="Technical Skills"
      />

      <div className="skills__sub">
        <IconButton onClick={handleLanguageModal}>
          <AddBoxIcon />
        </IconButton>
      </div>

      <div className={`${toggleModal ? 'modal__closed' : ''}`}>
        <Modal handleClose={handleLanguageModal}>
          <h1>Choose your skills</h1>

          <br />
          <br />

          <div className="skills__languageLogos">
            {Logos.map((logo, idx) => (
              <IconButton key={idx} title={logo.language}>
                <img src={logo.src} alt={logo.language} />
              </IconButton>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Skills;
