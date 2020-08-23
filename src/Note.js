import React from 'react';
import './Note.css';
//import { Input } from 'reactstrap';

export default class Note extends React.Component{
    render(){
        return(
           <div className="Note container">
            <input className="Note-title" placeholder="Insert Title Here..."/>
            <Line value={"Svg-up"}/>
            <textarea className="Note-body" placeholder="Insert  Here..."/>
            <Line value={"Svg-down"}/>
            <input className="Note-tags" placeholder="Insert Tags Here..."/>
            </div> 
        );
    }
}

function Line(props) {
    return(
        <div className={props.value}>
            <svg width="871" height="9" viewBox="0 0 871 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g filter="url(#filter0_f)">
                <line x1="4.27274" y1="4.75" x2="866.727" y2="4.75" stroke="black" strokeWidth="0.5" y="126"/>
            </g>
            <defs>
                <filter id="filter0_f" x="0.272736" y="0.5" width="870.455" height="8.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                </filter>
            </defs>
            </svg>
        </div>
    );
}