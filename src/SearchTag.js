import React from 'react';
import './SearchTag.css';
//import { Input } from 'reactstrap'

export default class SearchTag extends React.Component {
    save = (note) => {
        note.heading = this.textInput.value
        note.value = this.textAreaInput.value
        note.tags = this.textInput2.value.split(',') //"ta, t2, t3"
        this.props.savenote(note)
    }

    render() {
        return (
            <div className="col-sm p-1 m-1 Search">
                <input className="Search-input" placeholder="Tag..."/>
            </div>
        );
    }
}

/*<input className="Search-input" placeholder="Tag..."/> */