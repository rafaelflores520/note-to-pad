import React from 'react';
import './NoteList.css';
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class NoteList extends React.Component {
    render () {
        return (
            <div className="col-sm-4">
                <center>
                    <div className="Note-list">
                        <ListGroup className='Note-list-frame'>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                        </ListGroup>
                    </div> 
                </center>
            </div>
        );
    }
}