import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Switch from './components/Switch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Switch />,
  document.getElementById('root'),
);
registerServiceWorker();
