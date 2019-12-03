import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import styled from "styled-components";
import { withRouter } from "react-router";
import CONSTANTS from "../../../config/constants";
import Button from "../../core/Button";
import { getItem, STORAGE_KEYS } from "../../../utils/storage";

const newOption = React.createRef();
const titleInput = React.createRef();

const Results = props => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(undefined);
  const [options, setOptions] = useState([]);

  return (
    <div>
      <Container>
        <Title>
          <HighlightText>.</HighlightText>Criar Enquete
        </Title>

        <Content>
          <StyledForm style={{ position: "relative" }}>
            <h5
              style={{
                position: "absolute",
                top: 0,
                left: 30,
                color: "#AAA",
                fontWeight: "unset",
                cursor: "pointer",
                textAlign: "center"
              }}
              onClick={() => {
                props.history.goBack();
              }}
            >
              Voltar
            </h5>
            <label style={{ marginTop: 30 }}>
              Digite o que você quer saber dos seus convidados
            </label>

            <input ref={titleInput} required placeholder="Título" />

            <label>
              Digite as opções nas quais você deseja que as pessoas votem para
              ser o dia da festa
            </label>
            {!options || options.length === 0 ? (
              <span
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "11px"
                }}
              >
                Nenhuma opção adicionada
              </span>
            ) : null}
            {options.map((option, index) => {
              return (
                <Option
                  key={index}
                  isFirst={index === 0}
                  onClick={() => {
                    setOptions(options.filter(item => item !== option));
                  }}
                >
                  {option}
                </Option>
              );
            })}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "15px",
                marginBottom: "15px"
              }}
            >
              <input
                ref={newOption}
                required
                placeholder="Adicionar novo"
                style={{ width: "90%", marginBottom: 0, marginTop: 0 }}
              />
              <Button
                style={{
                  height: "40px",
                  marginRight: 0,
                  marginLeft: "15px",
                  marginBottom: "30px"
                }}
                onClick={() => {
                  setOptions([
                    ...options,
                    newOption.current.value && newOption.current.value.trim()
                  ]);
                  newOption.current.value = "";
                }}
              >
                Inserir
              </Button>
            </div>

            <Button
              onClick={() => {
                if (!options || options.length <= 1) {
                  setError("Insira pelo menos 2 opções");
                }
                const userData = getItem(STORAGE_KEYS.APP_LOGGED_USER);
                if (!userData) return;
                props.createPoll(
                  userData.email,
                  titleInput.current.value,
                  options,
                  () => {
                    props.history.push("/");
                  },
                  () => {
                    setError(
                      "Ocorreu um erro ao salvar a enquete, tente novamente"
                    );
                  }
                );
              }}
            >
              Entrar
            </Button>

            {error ? <Error>{error}</Error> : null}
          </StyledForm>
        </Content>
      </Container>
    </div>
  );
};

const Option = styled.div`
  padding: 5px 5px;
  background-color: #fff;
  border-radius: 8px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  margin-top: ${props => (props.isFirst ? "30px" : "5px")};
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const Error = styled.div`
  width: 100%;
  min-height: 40px;

  box-sizing: border-box;
  padding: 8px 16px;
  margin-top: 16px;

  background-color: #ed8686;
  color: white;
  font-size: 11px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 55pt;
  font-weight: 600;
  text-align: left;
  mix-blend-mode: soft-light;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const HighlightText = styled.span`
  color: #0081ef;
`;

const Container = styled.div`
  width: calc(100vw - 20%);
  min-width: 300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-left: 10%;
  margin-right: 10%;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const StyledForm = styled.div`
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  border: 1px solid #e9e9e9;

  background-color: white;
  border: 0;
  padding: 32px;
  box-shadow: inset 0 7em 10em -5em rgba(255, 255, 255, 0.6),
    0 0.3em 0.5em -0.2em rgba(100, 100, 100, 0.5),
    0 1em 2em -0.75em rgba(100, 100, 100, 0.05),
    0 1em 3em -0.5em rgba(100, 100, 100, 0.01),
    0 3em 3em -0.25em rgba(100, 100, 100, 0.01);
  /* transform: translate(-50%, -50%); */
  transition: 1s;

  label {
    text-align: left;
    font-size: 12px;
    font-weight: normal;
  }

  input {
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 8px;
    border: 0;
    border-bottom: 1px solid #045de9;
    box-sizing: border-box;

    outline: none;

    margin-bottom: 32px;
    margin-top: 8px;

    transition: 1s;

    &:focus {
      border-bottom: 1px solid #06bcfb;
    }
  }
`;

const SignInLink = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default withRouter(Results);
