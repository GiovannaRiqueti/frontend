import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Button from "../../core/Button";
import { getItem, STORAGE_KEYS, removeItem } from "../../../utils/storage";

const Menu = props => {
  const [loggedUser, setLoggedUser] = useState(undefined);

  useEffect(() => {
    setLoggedUser(getItem(STORAGE_KEYS.APP_LOGGED_USER));
  }, []);

  const login = () => {
    props.history.push("/login/");
  };

  const logout = () => {
    removeItem(STORAGE_KEYS.APP_LOGGED_USER);
    setLoggedUser(undefined);
  };

  const managePolls = () => {
    props.history.push("/manage/");
  };

  const createPoll = () => {
    props.history.push("/results/");
  };

  const startExam = () => {
    props.history.push("/list-polls/");
  };

  return (
    <OptionsContainer>
      {loggedUser ? (
        <>
          <Button onClick={logout}>Sair da conta</Button>

          {loggedUser.isAdmin ? (
            <>
              <Button onClick={managePolls}>Gerenciar Enquetes</Button>
              <Button onClick={createPoll}>Criar Enquete</Button>
            </>
          ) : (
            <Button onClick={startExam}>Participar da enquete</Button>
          )}
        </>
      ) : (
        <Button onClick={login}>Fazer login</Button>
      )}
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export default withRouter(Menu);
