import React from "react";
import SignUp from "../presentational/SignUp";
import CONSTANTS from "../../config/constants";

class SignUpContainer extends React.Component {
  async registerNewAccount(
    name,
    email,
    password,
    isAdmin = false,
    successfulCallback = () => {},
    failureCallback = () => {}
  ) {
    fetch(`${CONSTANTS.URL_HOST}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin
      })
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        successfulCallback();
      })
      .catch(err => {
        failureCallback(err);
      });
  }

  render() {
    return <SignUp registerNewAccount={this.registerNewAccount.bind(this)} />;
  }
}

export default SignUpContainer;
