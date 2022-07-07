import React from 'react';
import Balloon from '../balloon/balloon';
import './talkofday.css';

const TalkOfDay = (props) => {
  return (
    <div className="talkOfDay">
      <h2>{props.date}</h2>
      <div className="balloons">
        {props.talksOfDay.map(talk => {
          if (talk.announce) {
            return (<p style={{ fontSize: '11px', textAlign: 'center' }}>メッセージは削除されました</p>);
          }
          if (talk.text) {
            return (
            <Balloon
              user={talk.user}
              text={talk.text}
              time={talk.time}
              myTalk={props.my === talk.user}
            />
            )
          };
          return null;
        })}
      </div>
    </div>
  );
}

export default TalkOfDay;