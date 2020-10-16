import React, { useState } from 'react';

import MainHeading from '../main-heading/main-heading.component';
import ProjectSection from '../projects-section/projects-section.component';

import './projects.style.css';

const Projects = ({ className }) => {
  const [counter, setCounter] = useState(0);
  const [projectSection, setProjectSection] = useState([
    {
      id: counter,
    },
  ]);

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
    <div className={`projects ${className}`}>
      <MainHeading placeholder="Projects" content="Personal Projects" />

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

export default Projects;
