import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './tutorial.css';
import Step01 from '../../step01.png';
import Step02 from '../../step02.png';
import Step03 from '../../step03.png';
import Step04 from '../../step04.png';
import Close from '../../close.svg';

const Tutorial = () => {

  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <button
        className="tutorial_trigger"
        onClick={() => setIsShowModal(true)}
      >
        使い方を見る
      </button>
      <ReactModal
        isOpen={isShowModal}
        contentLabel="使い方"
        className="tutorial"
        overlayClassName="tutorial_overlay"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsShowModal(false)}
      >
        <button
          className="tutorial_close"
          onClick={() => setIsShowModal(false)}
        >
          <img src={Close} alt="閉じる" />
        </button>
        <p className="tutorial_title">使い方</p>
          <div>
            <p>Step 1</p>
            <p className="slide_desc">
              トークルームを開き、メニュー画面のボタンをタップします。
            </p>
            <img src={Step01} alt="" />
          </div>
          <div>
            <p>Step 2</p>
            <p className="slide_desc">
              メニュー画面から設定画面(歯車マーク)を開きます。
            </p>
            <img src={Step02} alt="" />
          </div>
          <div>
            <p>Step 3</p>
            <p className="slide_desc">
              『トーク履歴を送信』をタップしてLINE Keep等に保存します。
            </p>
            <img src={Step03} alt="" />
          </div>
          <div>
            <p>Step 4</p>
            <p className="slide_desc">
              Keepを開いて端末にダウンロードします。
            </p>
            <img src={Step04} alt="" />
          </div>
      </ReactModal>
    </>
  );
}

export default Tutorial;