import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import './styles.scss';
import TaskGroupHeader from '../../components/organisms/task-group-header';
import FloatingHeaderTable, {ActionColor} from '../../components/molecules/floating-header-table';
import PlayIcon from '../../assets/images/icons/play';
import EditIcon from '../../assets/images/icons/edit';
import DeleteIcon from '../../assets/images/icons/delete';
import OverlayScrollbars from 'overlayscrollbars';
import ipcRenderer from '../../util/ipc-renderer';


type Props = {
  isOpen: boolean;
}

const Settings: React.FC<Props> = () => {

  return (

  );
};

export default Settings;
