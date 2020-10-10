import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import ProjectSection from '../projects-section/projects-section.component';

import './projects.style.css';

const Projects = () => {
  const [counter, setCounter] = useState(0);
  const [projectSection, setProjectSection] = useState([
    {
      id: counter,
    },
  ]);

  const style1 = {
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  };

  const handleAddClick = (e) => {
    setProjectSection([
      ...projectSection,
      {
        id: counter + 1,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleSortDownClick = (e, id) => {
    const idx = projectSection.findIndex((section) => section.id === id);

    if (idx < projectSection.length - 1) {
      const newCopy = [...projectSection];

      [newCopy[idx + 1], newCopy[idx]] = [newCopy[idx], newCopy[idx + 1]];

      setProjectSection(newCopy);
    }
  };

  const handleSortUpClick = (e, id) => {
    const idx = projectSection.findIndex((section) => section.id === id);

    if (idx !== 0) {
      const newCopy = [...projectSection];

      [newCopy[idx - 1], newCopy[idx]] = [newCopy[idx], newCopy[idx - 1]];

      setProjectSection(newCopy);
    }
  };

  const handleRemoveClick = (e, id) => {
    setProjectSection(projectSection.filter((section) => section.id !== id));
  };

  return (
    <div className="projects">
      <ContentInput
        placeholder="Projects"
        content="Personal Projects"
        style={style1}
      />

      <div className="projects__sub">
        {projectSection?.map((item, position) => (
          <ProjectSection
            key={item.id}
            id={item.id}
            position={position}
            length={projectSection.length}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
            handleSortDownClick={handleSortDownClick}
            handleSortUpClick={handleSortUpClick}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Projects);
