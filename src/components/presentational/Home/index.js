import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <Title>
            <HighlightText>.</HighlightText>Party Day Consensus
          </Title>
          <Description>
            Seja bem vindo à nossa aplicação. O objetido da mesma é que vocês e
            seus amigos possam escolher o melhor dia para festa de vocês :)
            Bebam com moderação!
          </Description>
        </TitleContainer>
        <Content>
          <Menu />
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  width: calc(100vw - 20%);
  margin-left: 10%;
  margin-right: 10%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 30px;

  @media screen and (max-width: 768px) {
    /* background-color: white; */
  }
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

const Description = styled.p`
  width: 40%;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export default Home;
