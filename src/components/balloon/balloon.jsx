import React from 'react';
import './balloon.css';

const Balloon = (props) => {
  return (
    <div className={`balloon ${props.myTalk ? 'right' : 'left'}`}>
      <p className="user">{props.user}</p>
      <p className="text">{props.text}</p>
      <p className="time">{props.time}</p>
    </div>
  );
}

export default Balloon;
