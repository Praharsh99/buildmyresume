import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainHeading from '../main-heading/main-heading.component';
import CustomParagraphSection from '../custom-paragraph-section/custom-paragraph-section.component';

import { selectFontSize } from '../../redux/resume/resume.selectors';

import './custom-paragraph.style.css';

const CustomParagraph = ({ className, fontSize }) => {
  const [counter, setCounter] = useState(0);
  const [paragraphSection, setParagraphSection] = useState([
    {
      id: counter,
    },
  ]);

  const handleAddClick = (e) => {
    setParagraphSection([
      ...paragraphSection,
      {
        id: counter + 1,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleSortDownClick = (e, id) => {
    const idx = paragraphSection.findIndex((section) => section.id === id);

    if (idx < paragraphSection.length - 1) {
      const newCopy = [...paragraphSection];

      [newCopy[idx + 1], newCopy[idx]] = [newCopy[idx], newCopy[idx + 1]];

      setParagraphSection(newCopy);
    }
  };

  const handleSortUpClick = (e, id) => {
    const idx = paragraphSection.findIndex((section) => section.id === id);

    if (idx !== 0) {
      const newCopy = [...paragraphSection];

      [newCopy[idx - 1], newCopy[idx]] = [newCopy[idx], newCopy[idx - 1]];

      setParagraphSection(newCopy);
    }
  };

  const handleRemoveClick = (e, id) => {
    setParagraphSection(
      paragraphSection.filter((section) => section.id !== id)
    );
  };

  return (
    <div className={`customParagraph ${className}`}>
      <MainHeading
        fontSize={fontSize}
        placeholder="Custom Heading"
        content="Custom Heading"
      />

      <div className="customParagraph__sub">
        {paragraphSection.map((item, position) => (
          <CustomParagraphSection
            key={item.id}
            id={item.id}
            position={position}
            length={paragraphSection.length}
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

export default connect(mapStateToProps)(CustomParagraph);
