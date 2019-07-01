import React from 'react';
import axios from 'axios';
import history from "../auth-zero/history";

axios.defaults.baseURL = '';

axios.interceptors.request.use(
  options => {
    options.headers.authorization = localStorage.token;
    return options;
  },
  err => {
    // do something with the error
    return Promise.reject(err);
  }
);

function RequiresAuth(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.token;
      return <>{token ? <Component {...this.props} /> :history.replace('/')}</>;
    }
  };
}

export default RequiresAuth