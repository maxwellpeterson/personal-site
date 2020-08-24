import React from "react"
import styled from "styled-components"
import Background from "styles/components/background"
import Content from "styles/components/content"

const WelcomeContent =  styled(Content)`
  height: 100vh;
  padding: 0 25px;

  @media (max-height: 400px) {
    justify-content: flex-end;
  }
`

const StyledMessage = styled.p`
  padding: 0.75em 0;
  font-size: 1.6em;
`

export default function Welcome({ greeting }) {
  return (
    <Background>
      <WelcomeContent>
        {greeting.map(msg => (
          <StyledMessage key={msg}>
            {msg}
          </StyledMessage>
        ))}
      </WelcomeContent>
    </Background>
  )
}