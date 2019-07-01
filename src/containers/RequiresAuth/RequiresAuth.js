import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

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
      return <>{token ? <Component {...this.props} /> : this.props.history.push('/')}</>;
    }
  };
}

export default withRouter(RequiresAuth)