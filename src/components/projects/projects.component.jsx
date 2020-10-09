import React from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './projects.style.css';

const Projects = ({ mainColor }) => {
  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const style2 = {
    fontSize: '18px',
    color: `${mainColor}`,
    fontWeight: '700',
  };

  const style3 = {
    fontSize: '14px',
    fontWeight: '400',
    padding: '2px 5px',
  };

  const style4 = {
    fontSize: '14px',
    fontWeight: '400',
    padding: '3px 5px',
  };

  return (
    <div className="projects">
      <ContentInput
        placeholder="Projects"
        content="Personal Projects"
        style={style1}
      />

      <div className="projects__sub">
        <div className="projects__section">
          <div className="projects__sectionName">
            <ContentInput
              placeholder="Project Name"
              placeholderBold
              style={style2}
            />
            {/* TODO: Add the Language logo selector */}
            <div>
              <img
                src="https://img.icons8.com/color/50/000000/react-native.png"
                alt="react"
              />
            </div>
          </div>

          <ContentInput
            placeholder="Subtitle"
            placeholderSemiBold
            style={style3}
          />

          <ContentInput
            placeholder="Give a short description about your project like, main functionality, features to lookout for, languages and tools used, and any website links"
            style={style4}
          />
        </div>

        <div className="projects__section">
          <div className="projects__sectionName">
            <ContentInput
              placeholder="Project Name"
              placeholderBold
              style={style2}
            />
            {/* TODO: Add the Language logo selector */}
            <div>
              <img
                src="https://img.icons8.com/color/50/000000/react-native.png"
                alt="react"
              />
            </div>
          </div>

          <ContentInput
            placeholder="Subtitle"
            placeholderSemiBold
            style={style3}
          />

          <ContentInput
            placeholder="Give a short description about your project like, main functionality, features to lookout for, languages and tools used, and any website links"
            style={style4}
          />
        </div>

        <div className="projects__section">
          <div className="projects__sectionName">
            <ContentInput
              placeholder="Project Name"
              placeholderBold
              style={style2}
            />
            {/* TODO: Add the Language logo selector */}
            <div>
              <img
                src="https://img.icons8.com/color/50/000000/react-native.png"
                alt="react"
              />
            </div>
          </div>

          <ContentInput
            placeholder="Subtitle"
            placeholderSemiBold
            style={style3}
          />

          <ContentInput
            placeholder="Give a short description about your project like, main functionality, features to lookout for, languages and tools used, and any website links"
            style={style4}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(Projects);
