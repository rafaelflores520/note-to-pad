import React from 'react';
import './SearchTag.css';
//import { Input } from 'reactstrap'

export default class SearchTag extends React.Component {
    render() {
        return (
            <div className="Search">
                <svg width="35" height="64" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.8464 22H23.3292L22.8044 21.45C24.6746 19.18 25.8005 16.23 25.8005 13C25.8005 5.82 20.2472 0 13.3962 0C6.54523 0 0.991913 5.82 0.991913 13C0.991913 20.18 6.54523 26 13.3962 26C16.4782 26 19.293 24.82 21.459 22.87L21.9838 23.42V25L31.5256 34.98L34.3691 32L24.8464 22ZM13.3962 22C8.65396 22 4.80862 17.97 4.80862 13C4.80862 8.03 8.65396 4 13.3962 4C18.1385 4 21.9838 8.03 21.9838 13C21.9838 17.97 18.1385 22 13.3962 22Z" fill="#333438"/>
                </svg>
                <input className="Search-input" placeholder="Tag..."/>
            </div>
        );
    }
}