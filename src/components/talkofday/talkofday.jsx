import React from 'react';
import Balloon from '../balloon/balloon';
import './talkofday.css';

const TalkOfDay = (props) => {
  return (
    <div className="talkOfDay">
      <h2>{props.date}</h2>
      <div className="balloons">
        {props.talksOfDay.map(talk => {
          return (
            <Balloon
              user={talk.user}
              text={talk.text}
              time={talk.time}
              myTalk={props.my === talk.user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TalkOfDay;