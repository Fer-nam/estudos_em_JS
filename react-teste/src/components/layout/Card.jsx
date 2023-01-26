import './Card.css';
import React from 'react';

export default function Card(props) {
   const CardStyle ={
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00'
   }
    return (
        <div className="Card" style={CardStyle}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}