import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";

class ChooseProfile extends React.Component {
  _selectProfile() {
    this.props.history.push("/exam/");
  }
  render() {
    return (
      <ChooseProfileContainer>
        <h1>Escolha seu perfil</h1>
        <ListProfile>
          <ProfileCard
            src={require("../../../assets/images/profiles/felipe.png")}
            onClick={this._selectProfile.bind(this)}
          />
          <ProfileCard
            src={require("../../../assets/images/profiles/rafael.jpg")}
            onClick={this._selectProfile.bind(this)}
          />
          <ProfileCard
            src={require("../../../assets/images/profiles/giovanna.jpg")}
            onClick={this._selectProfile.bind(this)}
          />
          <ProfileCard
            src={require("../../../assets/images/profiles/anna.jpg")}
            onClick={this._selectProfile.bind(this)}
          />
          <ProfileCard
            src={require("../../../assets/images/profiles/filipe.jpg")}
            onClick={this._selectProfile.bind(this)}
          />
        </ListProfile>
      </ChooseProfileContainer>
    );
  }
}

const ChooseProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileCard = styled.img`
  width: 150px;
  height: 150px;

  margin-left: 15px;
  margin-right: 15px;

  border-radius: 5px;

  cursor: pointer;

  box-shadow: inset 0 7em 10em -5em rgba(255, 255, 255, 0.6),
    0 0.3em 0.5em -0.2em rgba(100, 100, 100, 1),
    0 1em 2em -0.75em rgba(100, 100, 100, 0.25),
    0 1em 3em -0.5em rgba(100, 100, 100, 0.3),
    0 3em 3em -0.25em rgba(100, 100, 100, 0.2);
  /* transform: translate(-50%, -50%); */
  transition: 1s;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default withRouter(ChooseProfile);
