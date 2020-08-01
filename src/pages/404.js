import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"

const MessageContent = styled(Content)`
  align-items: center;
  height: 100vh;
`

const StyledHeading = styled.p`
  margin: 20px auto;
  font-size: 96px;
`

const StyledMessage = styled(StyledHeading)`
  font-size: 48px;
`

export default function PageNotFound() {
  return (
    <Layout>
      <Background>
        <MessageContent>
          <StyledHeading>
            404
          </StyledHeading>
          <StyledMessage>
            Page Not Found
          </StyledMessage>
        </MessageContent>
      </Background>
    </Layout>
  )
}