import React from "react";
import Login from "../presentational/Login";
import CONSTANTS from "../../config/constants";

class LoginContainer extends React.Component {
  signIn(
    email,
    password,
    successfulCallback = () => {},
    failureCallback = () => {}
  ) {
    fetch(`${CONSTANTS.URL_HOST}/signin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        if (resJson.userExists) {
          successfulCallback(resJson.data);
        } else {
          failureCallback(resJson.message);
        }
      })
      .catch(err => {
        failureCallback();
      });
  }
  render() {
    return <Login signIn={this.signIn.bind(this)} />;
  }
}

export default LoginContainer;
