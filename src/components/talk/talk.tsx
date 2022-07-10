import { useState } from 'react';
import ReactModal from 'react-modal';
import TalkOfDay from '../talkofday/talkofday';
import './talk.css';
import { getMembers } from '../../member';
import speaker from '../../speaker.svg';

type Props = {
  title: string,
  talks: Array<any>,
}

const Talk = (props: Props) => {
  const [myName, setMyName] = useState(null);
  const [isShowModal, setIsShowModal] = useState(true)

  return (
    <div className="talk">
      {isShowModal ? (
        <ReactModal
          isOpen={isShowModal}
          contentLabel="自分の名前を選択してください"
          onRequestClose={() => {
            setIsShowModal(false);
          }}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={myName !== null}
          className="modalContent"
        >
          <p className="question">自分の名前を選択してください</p>
          <ul className="memberList">
            {
            getMembers(props.talks).map(member => {
              return (
                <li
                  className="member"
                  onClick={() => {
                    setMyName(member);
                    setIsShowModal(false);
                  }}
                >
                  {member}
                </li>
              );
            })}
          </ul>
        </ReactModal>
      ) : null}
      <header className="talk_header">
        <h1 className="talk_title">{props.title}</h1>
        <button
          className="talk_speaker"
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          <img src={speaker} alt="" />
        </button>
      </header>
      {props.talks.map(talk => {
        return (
          <TalkOfDay
            date={talk.date}
            talksOfDay={talk.talksOfDay}
            my={myName}
          />
        );
      })}
    </div>
  );
}

export default Talk;