import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';

import { selectSections } from '../../redux/resume/resume.selectors';

import './contact.styles.css';

const Contact = ({ sectionData }) => {
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
        <div
          className={`contact__section ${
            !sectionData['email'] && 'section--disabled'
          }`}
        >
          <img
            src="https://img.icons8.com/color/48/000000/gmail.png"
            alt="Email"
          />
          <ContentInput placeholder="Email address" style={style2} />
        </div>

        <div
          className={`contact__section ${
            !sectionData['mobile'] && 'section--disabled'
          }`}
        >
          <img
            src="https://img.icons8.com/color/48/000000/nokia-3310.png"
            alt="Phone"
          />
          <ContentInput placeholder="Mobile Number" style={style2} />
        </div>

        <div
          className={`contact__section ${
            !sectionData['linkedin'] && 'section--disabled'
          }`}
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="Linkedin"
          />
          <ContentInput placeholder="Linkedin account link" style={style2} />
        </div>

        <div
          className={`contact__section ${
            !sectionData['github'] && 'section--disabled'
          }`}
        >
          <img
            src="https://img.icons8.com/fluent/64/000000/github.png"
            alt="Github"
          />
          <ContentInput placeholder="Github account link" style={style2} />
        </div>

        <div
          className={`contact__section ${
            !sectionData['portfolio'] && 'section--disabled'
          }`}
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/code.png"
            alt="Portfolio"
          />
          <ContentInput placeholder="Portfolio link" style={style2} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sectionData: selectSections(state),
});

export default connect(mapStateToProps)(Contact);
