import React from 'react';
import './styles.scss';

const Frame: React.FC = () => {
  return (
    <div className={`frame`}>
      <div className="frame-actions">
        <button className="close" />
        <button className="minimize" />
        <button className="maximize" />
      </div>
      <h1 className={'title'}>Athena AIO</h1>
      <p className={'version'}>v{'1.0.0'}</p>
    </div>
  );
};

export default Frame;
