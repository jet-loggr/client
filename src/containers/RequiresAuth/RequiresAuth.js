import React from "react";
import axios from "axios";
import history from "../auth-zero/history";

axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

axios.interceptors.request.use(
  options => {
    options.headers.authorization = `Bearer ${localStorage.id_token}`;
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
      const token = localStorage.id_token;
      return (
        <>{token ? <Component {...this.props} /> : history.replace("/")}</>
      );
    }
  };
}

export default RequiresAuth;
