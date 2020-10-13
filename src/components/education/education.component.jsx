import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTheVariableFontValue } from '../../assets/utils';

import ContentInput from '../content-input/content-input.component';
import EducationSection from '../education-section/education-section.component';

import { selectFontSize } from '../../redux/resume/resume.selectors';

import './eductation.style.css';

const Education = ({ className, fontSize }) => {
  const [counter, setCounter] = useState(0);
  const [educationSection, setEducationSection] = useState([
    {
      id: counter,
    },
  ]);

  const style = {
    textTransform: 'uppercase',
    fontSize: `${18 + getTheVariableFontValue(fontSize)}px`,
    fontWeight: 'bold',
    color: '#000',
  };

  const handleAddClick = (e) => {
    setEducationSection([
      ...educationSection,
      {
        id: counter + 1,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleSortDownClick = (e, id) => {
    const idx = educationSection.findIndex((section) => section.id === id);

    if (idx < educationSection.length - 1) {
      const newCopy = [...educationSection];

      [newCopy[idx + 1], newCopy[idx]] = [newCopy[idx], newCopy[idx + 1]];

      setEducationSection(newCopy);
    }
  };

  const handleSortUpClick = (e, id) => {
    const idx = educationSection.findIndex((section) => section.id === id);

    if (idx !== 0) {
      const newCopy = [...educationSection];

      [newCopy[idx - 1], newCopy[idx]] = [newCopy[idx], newCopy[idx - 1]];

      setEducationSection(newCopy);
    }
  };

  const handleRemoveClick = (e, id) => {
    setEducationSection(
      educationSection.filter((section) => section.id !== id)
    );
  };

  return (
    <div className={`education ${className}`}>
      <ContentInput placeholder="Education" content="Education" style={style} />

      <div className="education__sub">
        {educationSection?.map((item, position) => (
          <EducationSection
            key={item.id}
            id={item.id}
            position={position}
            length={educationSection.length}
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

const mapStateToProps = (state) => ({
  fontSize: selectFontSize(state),
});

export default connect(mapStateToProps)(Education);
