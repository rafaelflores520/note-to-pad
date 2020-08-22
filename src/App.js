import React from 'react';
import './App.css';
import NoteList from './NoteList';
import Search from './SearchTag';


function App() {
  return (
    <div className="App">
      <h1 className="Title-style">Note - To - Pad</h1>
      <Search/>
      <button className="Add-note">
          <p className="Add-note-text">New</p>
      </button>
      <NoteList/>
    </div>
  );
}

export default App;
