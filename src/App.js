import React from 'react';
import './App.css';
import NoteList from './NoteList';
import Search from './SearchTag';
import Note from './Note';
import { Button } from 'reactstrap';

let isThere = !!localStorage.getItem('datos')
console.log("Entro?")
const notesArray = isThere ? JSON.parse(localStorage.getItem('datos')) : []
console.log(notesArray)

/*constructor(props){
    super(props)
    if (!!guardado) {
      state = guardado
    }else{
      state = {
        currentNote: null,
        notes: notesArray,
        search: ''
      }
  } */

export default class App extends React.Component {
  /*componentDidMount() {
    const currentNote = localStorage.getItem('datosC') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    this.setState({ user, rememberMe });
  }*/
  state = {
    currentNote: null,
    notes: notesArray,
    search: ''
  }

  changeCurrentQuery = (qry) => {
    this.setState({ search: qry })
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
    localStorage.setItem('datos', JSON.stringify(this.state.notes));
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
          <Search changeCurrentQuery={this.changeCurrentQuery}/>
          <div className="col-sm p-1 m-1 center-block">
            <center>
              <Button className="Add-note" onClick={this.addNew}>
                <p className="Add-note-text">New</p>
              </Button>
            </center>
          </div>
        </div>
        <div className="row">
          <NoteList notes={this.state.notes} changeCurrentNote={this.changeCurrentNote} deletenote={this.deletenote} query={this.state.search}/>
          <div className="col">
            {( this.state.currentNote !== null ) && ( <Note note={this.state.currentNote} savenote={this.saveNote}/> )}
          </div>
        </div>
      </div>
    );
  }
}

