import React from "react";
import history from "../auth-zero/history";

const ErrorPage = props => {
  return (
    <>
      <h1 className="error-page__title">Page Not Found.</h1>
      <button className="error-page__go-back-btn" onClick={history.goBack}>Go Back</button>
    </>
  );
};

export default ErrorPage;