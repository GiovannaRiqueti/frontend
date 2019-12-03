import styled from "styled-components";

export default styled.button`
  max-width: ${props => (props.maxWidth ? props.maxWidth : "unset")};
  background-color: blue;

  margin-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 20px;

  border-radius: 30px;
  border: 0;

  background-color: #045de9;

  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  transition: 1s;

  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #06bcfb;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
