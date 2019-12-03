import React from "react";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./components/container/HomeContainer";
import ExamContainer from "./components/container/ExamContainer";
import ChooseProfileContainer from "./components/container/ChooseProfileContainer";
import LoginContainer from "./components/container/LoginContainer";
import signUpContainer from "./components/container/SignUpContainer";
import ConclusionContainer from "./components/container/ConclusionContainer";
import ResultsContainer from "./components/container/ResultsContainer";
import ManageContainer from "./components/container/ManageContainer";
import PollDetailsContainer from "./components/container/PollDetailsContainer";
import ListPollsContainer from "./components/container/ListPollsContainer";

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: -15%;
    right: -15%;
    width: 100%;
    height: 100%;
    background-image: url(https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/5b22868e28420a7c67d30f54_003-red-gradients.svg);
    background-repeat: no-repeat;
    background-position: top right;
  }
`;
function App() {
  return (
    <div className="App">
      <Background />
      <Router>
        <div>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/exam/" component={ExamContainer} />
          <Route path="/choose-profile/" component={ChooseProfileContainer} />
          <Route path="/login/" component={LoginContainer} />
          <Route path="/signUp/" component={signUpContainer} />
          <Route path="/conclusion/" component={ConclusionContainer} />
          <Route path="/results/" component={ResultsContainer} />
          <Route path="/manage/" component={ManageContainer} />
          <Route path="/poll-details/" component={PollDetailsContainer} />
          <Route path="/list-polls/" component={ListPollsContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
