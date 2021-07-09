import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Global from './templates/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Global />
    </BrowserRouter>
  );
};

export default App;
