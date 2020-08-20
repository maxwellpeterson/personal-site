import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"

const WelcomeContent =  styled(Content)`
  height: 100vh;
`

const StyledMessage = styled.p`
  font-size: 32px;
`

const text = [
  "Hi, I'm Max.",
  "I'm a third-year undergraduate studying computer science at Northeastern University."
];

export default function Welcome() {
  return (
    <Background>
      <WelcomeContent>
        {text.map(msg => (
          <StyledMessage key={msg}>
            {msg}
          </StyledMessage>
        ))}
      </WelcomeContent>
    </Background>
  )
}