import React, {useState} from 'react';
import './styles.scss';
import SideModalHeader from '../../components/molecules/side-modal-header';

const Settings: React.FC = () => {
  return (
    <div className={'settings-page'}>
      <section>
        <SideModalHeader>Settings</SideModalHeader>
      </section>
      <section>
        <SideModalHeader>Change Log</SideModalHeader>
      </section>
    </div>
  );
};

export default Settings;
