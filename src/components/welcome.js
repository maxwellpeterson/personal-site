import React from "react"
import styled from "styled-components"
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
  font-size: 32px;
  color: ${props => props.focus ? 'black' : 'white'};
  transition: all 0.5s;
`

/* Want better solution for this */
const text = [
  "Hi, I'm Max.",
  "I'm a third-year undergraduate studying computer science at Northeastern University."
];

export default function Welcome({ focus }) {
  return (
    <WelcomeBackground focus={focus}>
      <WelcomeContent>
        {text.map(msg => (
          <StyledMessage focus={focus} key={msg}>
            {msg}
          </StyledMessage>
        ))}
      </WelcomeContent>
    </WelcomeBackground>
  )
}