import React from 'react';
import './Note.css';
//import { Input } from 'reactstrap';

export default class Note extends React.Component{
    componentWillReceiveProps(nextProps) {
        const newProps = nextProps
        this.textInput.value = newProps.note.heading
        this.textAreaInput.value = newProps.note.value
        this.textInput2.value = newProps.note.tags
    }
    save = (note) => {
        note.heading = this.textInput.value
        note.value = this.textAreaInput.value
        note.tags = this.textInput2.value.split(',') //"ta, t2, t3"
        this.props.savenote(note)
    }

    render(){
        const { note } = this.props;
        return(

                <div className="Note">
                    <input className="Note-title " placeholder="Title Here..." ref={(input) => { this.textInput = input }} onChange={(event)=>this.save(note) }/>
                    <div className="dash Up"/>
                    <textarea className="Note-body " placeholder="Text Here..." ref={(input) => { this.textAreaInput = input}} onChange={()=>this.save(note) }/>
                    <div className="dash Down"/>
                    <input className="Note-tags " placeholder="Tags Here..." ref={(input) => { this.textInput2 = input}} onChange={(event)=>this.save(note) }/>
                </div>
            
        );
    }
}

