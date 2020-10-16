import React from 'react';

import { Switch } from '@material-ui/core';

const SectionRow = ({
  name,
  value,
  disabled = false,
  otherName,
  handleChange,
}) => {
  return (
    <div className="sectionDropdown__row">
      <Switch
        checked={value}
        onChange={handleChange}
        color="secondary"
        name={name}
        disabled={disabled}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <span>{otherName || name}</span>
    </div>
  );
};

export default SectionRow;
