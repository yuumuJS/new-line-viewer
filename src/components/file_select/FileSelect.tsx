import React, { useState } from 'react';
import './FileSelect.css';

type Props = {
  onSelected: any
}

const FileSelect = (props: Props) => {
  const [fileName, setFileName] = useState(null);

  const handleChangeFile = (e: any) => {
    const target = e.target;
    const file = target.files.item(0);

    if (!file) {
      setFileName(null)
      return;
    }

    setFileName(file.name);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      props.onSelected(file.name, fileReader.result);
    };
    fileReader.readAsText(file);
  }


  return (
    <label>
      ファイルを選択
      <input
        type="file"
        onChange={e => handleChangeFile(e)}
      />
      {fileName ? (
        <p className="fileName">{fileName}</p>
      ) : null}
    </label>
  );
}

export default FileSelect;