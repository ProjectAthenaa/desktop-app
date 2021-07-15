import React from 'react';
import {HashRouter} from 'react-router-dom';
import Global from './templates/global';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Global />
    </HashRouter>
  );
};

export default App;
