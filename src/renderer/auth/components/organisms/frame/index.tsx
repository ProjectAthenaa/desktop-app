import React, { useState } from 'react';
import './styles.scss';
const {remote} = window.require('electron');

const Frame: React.FC = () => {
  const onClickWindowAction = async (action: 'minimize' | 'maximize' | 'close') => {
    const currentWindow = remote.getCurrentWindow();

    switch (action) {
      case "close":
        currentWindow.close();
        break;
      default:
        throw Error("Nonexistent action type.");
    }
  }

  return (
    <div className={`frame`}>
      <div className="frame-actions">
        <button className="close" onClick={() => onClickWindowAction('close')}/>
      </div>
      <div className={'right'}>
        <p className={'version'}>v{'1.0.0'}</p>
      </div>
    </div>
  );
};

export default Frame;
