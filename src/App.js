import React from 'react';

import ProfilePicture from './components/profile-picture/profile-picture.component';
import ContentInput from './components/content-input/content-input.component';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Build My Resumè {'🔥'}</h1>
      <ProfilePicture />
      <ContentInput />
    </div>
  );
}

export default App;
