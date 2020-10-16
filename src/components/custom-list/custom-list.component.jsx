import React, { useState } from 'react';

import MainHeading from '../main-heading/main-heading.component';
import CustomListSection from '../custom-list-section/custom-list-section.component';

import './custom-list.style.css';

const CustomList = ({ className }) => {
  const [counter, setCounter] = useState(1);
  const [listSection, setListSection] = useState([
    {
      id: counter - 1,
    },
    {
      id: counter,
    },
  ]);

  const handleAddClick = (e) => {
    setListSection([
      ...listSection,
      {
        id: counter + 1,
      },
    ]);
    setCounter(counter + 1);
  };

  const handleSortDownClick = (e, id) => {
    const idx = listSection.findIndex((section) => section.id === id);

    if (idx < listSection.length - 1) {
      const newCopy = [...listSection];

      [newCopy[idx + 1], newCopy[idx]] = [newCopy[idx], newCopy[idx + 1]];

      setListSection(newCopy);
    }
  };

  const handleSortUpClick = (e, id) => {
    const idx = listSection.findIndex((section) => section.id === id);

    if (idx !== 0) {
      const newCopy = [...listSection];

      [newCopy[idx - 1], newCopy[idx]] = [newCopy[idx], newCopy[idx - 1]];

      setListSection(newCopy);
    }
  };

  const handleRemoveClick = (e, id) => {
    setListSection(listSection.filter((section) => section.id !== id));
  };

  return (
    <div className={`customList ${className}`}>
      <MainHeading placeholder="Custom List" content="Custom List" />

      <div className="customList__sub">
        {listSection?.map((item, position) => (
          <CustomListSection
            key={item.id}
            id={item.id}
            position={position}
            length={listSection.length}
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

export default CustomList;
