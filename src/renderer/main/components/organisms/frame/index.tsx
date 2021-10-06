import React, { useState } from 'react';
import './styles.scss';
import Settings from '../../../assets/images/icons/settings';
import FullModal from '../../molecules/full-modal';
const {remote} = window.require('electron');

type Props = {
  openSettings: () => void;
}

const Frame: React.FC<Props> = ({ openSettings }) => {
  const onClickWindowAction = async (action: 'minimize' | 'maximize' | 'close') => {
    const currentWindow = remote.getCurrentWindow();

    if (!currentWindow) return;

    switch (action) {
      case "maximize":
        if (currentWindow.isMaximized()) {
          currentWindow.setSize(1440, 1024, true);
          break;
        }

        currentWindow.maximize();
        break;
      case "minimize":
        currentWindow.minimize();
        break;
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
        <button className="minimize" onClick={() => onClickWindowAction('minimize')}/>
        <button className="maximize" onClick={() => onClickWindowAction('maximize')}/>
      </div>
      <div className="draggable-region" />
      <div className={'right'}>
        <p className={'version'}>v{'1.0.0'}</p>
        <button
          onClick={openSettings}
          className={'settings-button'}>
          {Settings}
        </button>
      </div>
    </div>
  );
};

export default Frame;
