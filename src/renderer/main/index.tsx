import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";
import {store} from './store';
import './assets/styles/main.scss';

Sentry.init({
  dsn: "https://90d1906d85904342829b8075754dbeca@o706779.ingest.sentry.io/5867117",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
}

render();
