import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
/*ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,

  // </Provider>,

  document.getElementById("root")
);*/

//ServiceWorker.register();*/