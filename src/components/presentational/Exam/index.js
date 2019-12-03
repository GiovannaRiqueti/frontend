import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

class Exam extends React.Component {
  state = {
    error: undefined
  };
  render() {
    const question = this.props.questions[this.props.currentQuestion];

    if (this.props.isLoading)
      return (
        <LoadingContainer>
          <QuestionTitle>Carregando...</QuestionTitle>
        </LoadingContainer>
      );

    const { options } = this.props.pollDetails;
    return (
      <QuestionContainer>
        <QuestionTitle>
          Qual dia você acredita ser o ideal para a sua festa?
        </QuestionTitle>
        <QuestionOptionsContainer>
          {options.map((item, index) => {
            return (
              <QuestionOption
                onClick={() =>
                  this.props.submitAnswer(
                    this.props.pollDetails._id,
                    item,
                    () => {
                      this.props.history.push("/");
                    },
                    () => {
                      this.setState({
                        error: "Tivemos um problema. Tente novamente"
                      });
                    }
                  )
                }
              >
                {item}
              </QuestionOption>
            );
          })}
        </QuestionOptionsContainer>
        {this.state.error ? <Error>{this.state.error}</Error> : null}
      </QuestionContainer>
    );
  }
}

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

const QuestionTitle = styled.h1`
  mix-blend-mode: soft-light;
`;

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionContainer = styled.div`
  width: 80%;
  height: 100vh;

  margin-left: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuestionOptionsContainer = styled.div`
  width: 60%;
  margin-top: 30px;
`;

const QuestionOption = styled.div`
  padding: 15px;
  margin-left: 30px;
  margin-right: 30px;

  border-radius: 5px;
  border: 1px solid #e9e9e9;

  background-color: white;

  box-shadow: inset 0 7em 10em -5em rgba(255, 255, 255, 0.6),
    0 0.3em 0.5em -0.2em rgba(100, 100, 100, 0.5),
    0 1em 2em -0.75em rgba(100, 100, 100, 0.05),
    0 1em 3em -0.5em rgba(100, 100, 100, 0.01),
    0 3em 3em -0.25em rgba(100, 100, 100, 0.01);
  /* transform: translate(-50%, -50%); */
  transition: 1s;

  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const QuestionOptionDescription = styled.p`
  text-align: left;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
`;

const QuestionImage = styled.img`
  height: 200px;
  margin-top: 30px;
  margin-left: -30px;
  margin-right: -30px;
`;

export default withRouter(Exam);
