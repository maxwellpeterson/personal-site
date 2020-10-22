import React from "react"
import styled from "styled-components"
import Layout from "components/layout"
import Background from "styles/components/background"
import Content from "styles/components/content"

const MessageContent = styled(Content)`
  margin-bottom: 0;
  justify-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
`

const StyledHeading = styled.span`
  font-size: 4em;
`

const StyledMessage = styled.span`
  font-size: 2em;
`

export default function PageNotFound() {
  return (
    <Layout>
      <Background>
        <MessageContent>
          <StyledHeading>404</StyledHeading>
          <StyledMessage>Page Not Found</StyledMessage>
        </MessageContent>
      </Background>
    </Layout>
  )
}
