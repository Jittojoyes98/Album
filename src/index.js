import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router"
import { Provider } from "react-redux"

import store from "./redux/configureStore"

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);

// use of Router will give the ability to use routing for <App/> component
