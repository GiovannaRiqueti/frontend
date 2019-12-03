import React from "react";
import { withRouter } from "react-router";
import Exam from "../presentational/Exam";
import CONSTANTS from "../../config/constants";

class ExamContainer extends React.Component {
  state = {
    currentQuestion: 0,
    currentProfile: "",
    questions: [
      {
        title: "Como você costuma interagir com outras pessoas?",
        options: [
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_extraverted.png",
            description: `• Ganho energia quando estou com os outros<br />• Sou aberta a conhecer novas pessoas<br />• Aprendo mais quando estou com os outros<br />• Prefiro atividades em grupo`,
            value: "E"
          },
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_introverted.png",
            description: `• Ganho energia quando estou sozinho<br />• Prefiro ter um pequeno círculo de amigos<br />• Não gosto de multidão<br />• Prefiro atividades solitárias`,
            value: "I"
          }
        ]
      },
      {
        title: "Como você vê o mundo e processa informações?",
        options: [
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_intuitive.png",
            description: `• Sou mais idealista que prático<br />• Gosto de pensar em novos conceitos, mesmo que não tenham aplicação prática<br />• Sou guiado pela imaginação
            `,
            value: "N"
          },
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_observant.png",
            description: `• Sou mais prático do que idealista<br />• Prefiro me concentrar no mundo real do que em coisas teóricas<br />• Sou guiado pela experiência`,
            value: "S"
          }
        ]
      },
      {
        title: "Como você toma descisões e lida com as suas emoções?",
        options: [
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_feeling.png",
            description: `•Me preocupo com o sentimento das outras pessoas<br />• Evito conflitos<br />• As emoções geralmente influenciam mais nas minhas decisões que a lógica`,
            value: "F"
          },
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_thinking.png",
            description: `• A verdade é mais importante que os sentimentos em uma discussão<br />• A lógica geralmente influencia mais nas minhas decisões que a emoção<br />• Sou uma pessoa mais analítica`,
            value: "T"
          }
        ]
      },
      {
        title: "Como você planeja e executa tarefas?",
        options: [
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_prospecting.png",
            description: `• Sou mais adaptável que planejador<br />• Gosto de manter as opções em aberto`,
            value: "P"
          },
          {
            image:
              "https://www.16personalities.com/images/theory/traits/16personalities_judging.png",
            description: `• Gosto de planejar tudo<br />• Gosto de ver as tarefas acabadas o quanto antes`,
            value: "J"
          }
        ]
      }
    ]
  };

  updateProfile = (newProfile = "") => {
    if (this.state.currentQuestion + 1 >= this.state.questions.length) {
      this.setState(
        prevState => {
          return {
            currentProfile: `${prevState.currentProfile}${newProfile}`,
            isLoading: true
          };
        },
        () => {
          this.props.history.push({
            pathname: "/conclusion/",
            state: { profile: this.state.currentProfile }
          });
        }
      );
    } else {
      this.setState(
        prevState => {
          return {
            currentProfile: `${prevState.currentProfile}${newProfile}`,
            currentQuestion: prevState.currentQuestion + 1,
            isLoading: true
          };
        },
        () => {
          setTimeout(() => {
            this.setState({
              isLoading: false
            });
          }, 500);
        }
      );
    }
  };

  submitAnswer(
    pollId,
    option,
    successfulCallback = () => {},
    failureCallback = () => {}
  ) {
    fetch(`${CONSTANTS.URL_HOST}/poll/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        poll_id: pollId,
        answer: option
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
    return (
      <Exam
        isLoading={this.state.isLoading}
        pollDetails={this.props.location.state.pollDetails}
        questions={this.state.questions}
        updateProfile={this.updateProfile}
        currentQuestion={this.state.currentQuestion}
        submitAnswer={this.submitAnswer.bind(this)}
      />
    );
  }
}

export default withRouter(ExamContainer);
