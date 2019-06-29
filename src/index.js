import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { Router, withRouter } from "react-router-dom";
import store from "./store/store";
import history from "./containers/auth-zero/history";

const AppWithRouter = withRouter(App);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <AppWithRouter />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));



