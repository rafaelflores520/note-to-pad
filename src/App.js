import React from 'react';
import './App.css';
import NoteList from './NoteList';
import Search from './SearchTag';
import Note from './Note';
import { Button } from 'reactstrap';

const notesArray = [{id: 0, heading:'Note Uno', curdate: null, value:'This is a note', tags:['t1', 't2', 't3']}]

export default class App extends React.Component {
  state = {
    currentNote: null,
    notes: notesArray
  }

  changeCurrentNote = (note) =>{
    this.setState({ currentNote: note })
  }

  deletenote = (note) =>{
    this.setState((state) => ({ notes: state.notes.filter(noteIterator => (noteIterator.id !== note.id)) }))
    this.setState({ currentNote: null })
  }

  saveNote = (note) =>{
    this.setState((state) => { state.notes.concat([note]) })
    this.setState({ currentNote: note })
  }

  addNew = () =>{
    const note = {id: this.state.notes.length + 1, heading: 'New Title', curdate: this.DateFormat(), value: ' ', tags:[]}
    this.setState((state) => ({ notes: state.notes.concat([note]) }))
    this.setState({ currentNote: note })
    //console.log("El id de esta iteracion es: "+note.id)
  }

  DateFormat() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
}

  render(){
    this.state.notes.sort((a, b) => {return b.id-a.id})
    return (
      <div className="container-fluid p-3">
        <div className="row align-items-center">
          <div className="col-sm p-1 m-1 Title-style">Note - To - Pad</div>
          <Search/>
          <div className="col-sm p-1 m-1 center-block">
            <center>
              <Button className="Add-note" onClick={this.addNew}>
                <p className="Add-note-text">New</p>
              </Button>
            </center>
          </div>
        </div>
        <div className="row">
          <NoteList notes={this.state.notes} changeCurrentNote={this.changeCurrentNote} deletenote={this.deletenote}/>
          <div className="col">
            {( this.state.currentNote !== null ) && ( <Note note={this.state.currentNote} savenote={this.saveNote}/> )}
          </div>
        </div>
      </div>
    );
  }
}

