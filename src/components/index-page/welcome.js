import React from "react"
import styled from "styled-components"
import { Background } from "../../styles/components/background"
import { Content } from "../../styles/components/content"

const WelcomeContent =  styled(Content)`
  height: 100vh;
`

const StyledMessage = styled.p`
  font-size: 32px;
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