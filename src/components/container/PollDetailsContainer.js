import React from "react";
import PollDetails from "../presentational/PollDetails";
import CONSTANTS from "../../config/constants";

class PollDetailsContainer extends React.Component {
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

  deletePoll(
    pollId,
    successfulCallback = () => {},
    failureCallback = () => {}
  ) {
    if (!pollId) return;

    fetch(`${CONSTANTS.URL_HOST}/poll/${pollId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        if (resJson.status === "success") {
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
    return (
      <PollDetails
        getPolls={this.getPolls.bind(this)}
        pollDetails={this.props.location.state.pollDetails}
        deletePoll={this.deletePoll.bind(this)}
      />
    );
  }
}

export default PollDetailsContainer;
