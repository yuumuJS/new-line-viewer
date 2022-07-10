import React, { SetStateAction, useState } from 'react';
import { parseLineTalk } from './parse';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Talk from './components/talk/talk';
import FileSelect from './components/file_select/FileSelect';
import Tutorial from './components/tutorial/tutorial';
import './app.css';
import logo from './logo.svg';

const App = () => {
  const [fileName, setFileName] = useState('');
  const [talkText, setTalkText] = useState('');

  return (
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main className="title">
                <h1 className="app_title">
                  <img src={logo} alt="Logo" />
                </h1>
                <Tutorial />
                <FileSelect
                  onSelected={(title: SetStateAction<string>, content: SetStateAction<string>) => {
                    setFileName(title);
                    setTalkText(content);
                  }}
                />
                {fileName ? (
                  <Link to="/talkroom">
                    <button className="app_trigger">はじめる</button>
                  </Link>
                ) : null}
              </main>
            }
          />
          <Route
            path="/talkroom"
            element={
              <Talk
                title={fileName}
                talks={parseLineTalk(talkText)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
