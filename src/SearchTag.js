import React from 'react';
import './SearchTag.css';
//import { Input } from 'reactstrap'

export default class SearchTag extends React.Component {
    save = (qry) => {
        qry = this.textInput.value 
        this.props.changeCurrentQuery(qry)
    }

    render() {
        let qry
        return (
            <div className="col-sm p-1 m-1 Search">
                <input className="Search-input" placeholder="Tag..." ref={(input) => { this.textInput = input }} onChange={()=>this.save(qry) }/>
            </div>
        );
    }
}

/*<input className="Search-input" placeholder="Tag..."/> */