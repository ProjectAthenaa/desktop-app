import React from 'react';
import {HashRouter} from 'react-router-dom';
import Global from './templates/global';
import {Provider} from 'react-redux';
import {store} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Global />
      </HashRouter>
    </Provider>
  );
};

export default App;
