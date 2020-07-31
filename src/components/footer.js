import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background"

const FooterBackground = styled(Background)`
  background-color: black;
`

const FooterContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex: auto;
`

const Footnote = styled.p`
  padding 25px 25px;
  font-size: 20px;
  color: white;
`

const GitHubLink = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.25s;
  &:hover {
    color: darkviolet;
  }
`

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContent>
        <Footnote>
          Designed and built by Max Peterson. Source at{' '}
          <GitHubLink href="https://github.com/maxwellpeterson" target="_blank">
            GitHub
          </GitHubLink>
          .
        </Footnote>
      </FooterContent>
    </FooterBackground>
  )
}