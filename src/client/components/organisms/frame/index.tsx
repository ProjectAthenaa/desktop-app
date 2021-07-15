import React from 'react';
import './styles.scss';
import Settings from '../../../assets/images/icons/settings';
const {remote} = window.require('electron');

const Frame: React.FC = () => {
  const onClickWindowAction = async (action: 'minimize' | 'maximize' | 'close') => {
    const currentWindow = remote.getCurrentWindow();

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
      <div className={'right'}>
        <p className={'version'}>v{'1.0.0'}</p>
        <button className={'settings-button'}>
          {Settings}
        </button>
      </div>
    </div>
  );
};

export default Frame;
