import React from 'react';

import ProfilePicture from './components/profile-picture/profile-picture.component';
import ContentInput from './components/content-input/content-input.component';
import Resume from './components/resume/resume.component';
import ToolBar from './components/tool-bar/tool-bar.component';

import './App.css';

function App() {
  return (
    <div className="app">
      <ToolBar />
      <ProfilePicture />
      <ContentInput />
      <Resume />
    </div>
  );
}

export default App;
