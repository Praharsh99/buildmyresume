import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentInput from '../content-input/content-input.component';
import ProfessionalExpSection from '../professional-exp-section/professional-exp-section.component';

import './professional-experience.style.css';

const ProfessionalExp = ({ className }) => {
  const [counter, setCounter] = useState(0);
  const [profExpSections, setProfExpSections] = useState([
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
    setProfExpSections([
      ...profExpSections,
      {
        id: counter + 1,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleSortDownClick = (e, id) => {
    const idx = profExpSections.findIndex((section) => section.id === id);

    if (idx < profExpSections.length - 1) {
      const newCopy = [...profExpSections];

      [newCopy[idx + 1], newCopy[idx]] = [newCopy[idx], newCopy[idx + 1]];

      setProfExpSections(newCopy);
    }
  };

  const handleSortUpClick = (e, id) => {
    const idx = profExpSections.findIndex((section) => section.id === id);

    if (idx !== 0) {
      const newCopy = [...profExpSections];

      [newCopy[idx - 1], newCopy[idx]] = [newCopy[idx], newCopy[idx - 1]];

      setProfExpSections(newCopy);
    }
  };

  const handleRemoveClick = (e, id) => {
    setProfExpSections(profExpSections.filter((section) => section.id !== id));
  };

  return (
    <div className={`professionalExperience ${className}`}>
      <ContentInput
        placeholder="Professional Experience"
        content="Professional Experience"
        style={style1}
      />

      <div
        className="professionalExperience__sub"
        id="professionalExperience__sub"
      >
        {profExpSections?.map((item, position) => (
          <ProfessionalExpSection
            key={item.id}
            id={item.id}
            position={position}
            length={profExpSections.length}
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

export default connect(mapStateToProps)(ProfessionalExp);
