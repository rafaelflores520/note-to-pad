import React from 'react';
import './App.css';
import NoteList from './NoteList';
import Search from './SearchTag';
import Note from './Note';
import { Button } from 'reactstrap';


export default class App extends React.Component {
  render(){
    return (
      <div className="container-fluid p-3">
        <div className="row align-items-center">
          <div className="col-sm p-1 m-1 Title-style">Note - To - Pad</div>
          <Search/>
          <div className="col-sm p-1 m-1 center-block">
            <center>
              <Button className="Add-note">
                <p className="Add-note-text">New</p>
              </Button>
            </center>
          </div>
        </div>
        <div className="row">
          <NoteList/>
          <Note/>
        </div>
      </div>
    );
  }
}

/*
<div className="col-sm">
 <Note/>
</div>
*/