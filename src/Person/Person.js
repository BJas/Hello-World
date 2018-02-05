import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.val}/>
            <p>{props.val}</p>
        </div>
    )
}

export default person;