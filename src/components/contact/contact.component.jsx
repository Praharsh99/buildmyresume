import React from 'react';

import ContentInput from '../content-input/content-input.component';

import './contact.styles.css';

const Contact = () => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    fontSize: '13px',
    flex: 0.75,
    padding: '4px 5px',
  };

  return (
    <div className="contact">
      <ContentInput placeholder="Contact" style={style1} content="Contact" />

      <div className="contact__sub">
        <div className="contact__section">
          <img
            src="https://img.icons8.com/color/48/000000/gmail.png"
            alt="Email"
          />
          <ContentInput placeholder="Enter your email" style={style2} />
        </div>

        <div className="contact__section">
          <img
            src="https://img.icons8.com/doodle/64/000000/iphone-x.png"
            alt="Phone"
          />
          <ContentInput placeholder="Enter your number" style={style2} />
        </div>

        <div className="contact__section">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="Linkedin"
          />
          <ContentInput placeholder="Linkedin account link" style={style2} />
        </div>

        <div className="contact__section">
          <img
            src="https://img.icons8.com/fluent/64/000000/github.png"
            alt="Github"
          />
          <ContentInput placeholder="Github account link" style={style2} />
        </div>

        <div className="contact__section">
          <img
            src="https://img.icons8.com/fluent/48/000000/code.png"
            alt="Portfolio"
          />
          <ContentInput placeholder="Your website address" style={style2} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
