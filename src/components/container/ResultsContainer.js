import React from "react";
import Results from "../presentational/Results";
import CONSTANTS from "../../config/constants";

class ResultsContainer extends React.Component {
  createPoll(
    email,
    title = "",
    options,
    successfulCallback = () => {},
    failureCallback = () => {}
  ) {
    fetch(`${CONSTANTS.URL_HOST}/poll/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ownerId: email,
        title: title,
        description: "Descrição",
        options: options
      })
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
    return <Results createPoll={this.createPoll.bind(this)} />;
  }
}

export default ResultsContainer;
