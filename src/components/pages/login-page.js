import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Navigate to="/secret" />
  }

  return (
    <div className="jumbotron">
      <p>Login to see a secret page</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;