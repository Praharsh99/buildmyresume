import React from 'react';

import Footer from '../footer/footer.component';

import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { ReactComponent as Illustration } from '../../assets/homepage__illustration.svg';

import './homepage.style.css';

const HomePage = ({ handleClick }) => {
  return (
    <div className="homepage">
      <header>
        <span className="homepage__logo">Build My Resumè</span>
      </header>

      <div className="homepage__body">
        <div className="homepage__bodyLeft">
          <h1>Design your resume in real time</h1>
          <h1>and download a print-ready PDF.</h1>

          <div>
            <Button onClick={handleClick}>
              <EditIcon />
              <span>Design my resume</span>
            </Button>

            <span>Free & No sign-up required</span>
          </div>
        </div>

        <div className="homepage__bodyRight">
          <Illustration />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
