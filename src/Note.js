import React from 'react';
import './Note.css';
//import { Input } from 'reactstrap';

export default class Note extends React.Component{
    render(){
        return(
            <div className="col">
                <div className="Note">
                    <input className="Note-title" placeholder="Insert Title Here..."/>
                    <div className="dash Up"/>
                    <textarea className="Note-body" placeholder="Insert  Here..."/>
                    <div className="dash Down"/>
                    <input className="Note-tags" placeholder="Insert Tags Here..."/>
                </div>
            </div> 
        );
    }
}

