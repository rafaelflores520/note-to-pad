import React from 'react';
import './NoteList.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export default class NoteList extends React.Component {
    render () {
        const {notes, changeCurrentNote, deletenote} = this.props
        return (
            <div className="col-sm-4">
                <center>
                    <div className="Note-list">
                        <ListGroup className='Note-list-frame'>
                        { notes.map((note) => (
                            <ListGroupItem 
                            className="Note-item" 
                            key= {notes.id} 
                            onClick={() => changeCurrentNote(note)}>
                                <p className="Head-row">{note.heading}</p>
                                <p className="Date-row">{note.curdate}</p>
                                <Button className="Delete-note" onClick={ () => deletenote(note)}>X</Button>
                            </ListGroupItem>
                        ))}
                        </ListGroup>
                    </div> 
                </center>
            </div>
        );
    }
}

