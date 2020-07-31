import React from "react"
import styled from "styled-components"
import "typeface-cooper-hewitt"
import { Background } from "../styles/components/background";
import { Content } from '../styles/components/content'

const WelcomeBackground = styled(Background)`
  background-color: ${props => props.focus ? 'white' : 'black'};
  transition: all 0.5s;
`

const WelcomeContent =  styled(Content)`
  height: 100vh;
`

const StyledMessage = styled.p`
  padding 25px 25px;
  font-family: 'Cooper Hewitt';
  font-size: 32px;
  font-weight: 300;
  color: ${props => props.focus ? 'black' : 'white'};
  transition: all 0.5s;
`

/* Want better solution for this */
const text = [
  "Hi, I'm Max.",
  "I'm a third-year undergraduate studying computer science at Northeastern University."
];

export default function Welcome({ innerRef, focus }) {
  return (
    <WelcomeBackground focus={focus}>
      <WelcomeContent ref={innerRef}>
        {text.map(msg => {
          return (
            <StyledMessage focus={focus}>
              {msg}
            </StyledMessage>
          )
        })}
      </WelcomeContent>
    </WelcomeBackground>
  )
}