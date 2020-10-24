import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Background from "styles/components/background"
import Content from "styles/components/content"

const WelcomeContent = styled(Content)`
  height: 100vh;
  grid-gap: 2.5em;
  align-content: center;

  @media (max-height: 400px) {
    align-content: end;
  }
`

const StyledMessage = styled.p`
  font-size: 1.6em;
`

const Welcome = ({ greeting }) => {
  return (
    <Background>
      <WelcomeContent>
        {greeting.map((msg) => (
          <StyledMessage key={msg}>{msg}</StyledMessage>
        ))}
      </WelcomeContent>
    </Background>
  )
}

Welcome.propTypes = {
  greeting: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Welcome
