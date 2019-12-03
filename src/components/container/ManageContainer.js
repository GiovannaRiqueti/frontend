import React from "react";
import Manage from "../presentational/Manage";
import CONSTANTS from "../../config/constants";

class ManageContainer extends React.Component {
  getPolls(successfulCallback = () => {}, failureCallback = () => {}) {
    fetch(`${CONSTANTS.URL_HOST}/poll/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        if (resJson.data) {
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
    return <Manage getPolls={this.getPolls.bind(this)} />;
  }
}

export default ManageContainer;
