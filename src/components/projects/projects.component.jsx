import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AnimatedList } from 'react-animated-list';

import ContentInput from '../content-input/content-input.component';
import ProjectSection from '../projects-section/projects-section.component';

import { selectMainColor } from '../../redux/resume/resume.selectors';

import './projects.style.css';

const Projects = ({ mainColor }) => {
  const [projectSection, setProjectSection] = useState(1);

  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const handleAddClick = (e) => {
    setProjectSection(projectSection + 1);
  };

  const handleRemoveClick = (e) => {
    setProjectSection(projectSection - 1);
  };

  return (
    <div className="projects">
      <ContentInput
        placeholder="Projects"
        content="Personal Projects"
        style={style1}
      />

      <div className="projects__sub">
        <AnimatedList animation={'fade'}>
          {[...Array(projectSection).keys()].map((_i) => (
            <ProjectSection
              key={_i}
              id={_i}
              length={projectSection}
              handleAddClick={handleAddClick}
              handleRemoveClick={handleRemoveClick}
            />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mainColor: selectMainColor(state),
});

export default connect(mapStateToProps)(Projects);
