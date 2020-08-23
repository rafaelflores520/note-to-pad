import React from 'react';
import './App.css';
import NoteList from './NoteList';
import Search from './SearchTag';
import Note from './Note';
import { Button } from 'reactstrap';


export default class App extends React.Component {
  render(){
    return (
      <div className="container">
        <NoteList/>
        <nav className="navbar navbar-expand-sm justify-content-start">
          <h1 className="Title-style col-">Note - To - Pad</h1>
          <Search/>
          <Button className="Add-note col-">
            <p className="Add-note-text">New</p>
          </Button>
        </nav>
        <Note/>
      </div>
    );
  }
}
