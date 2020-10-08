import React from 'react';

import LeftBar from '../left-bar/left-bar.component';
import RightBar from '../right-bar/right-bar.component';

import './body.styles.css';

const Body = () => {
  return (
    <div className="body">
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default Body;
