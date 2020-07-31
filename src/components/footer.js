import React from "react"
import styled from "styled-components"
import "typeface-cooper-hewitt"
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
  font-family: 'Cooper Hewitt';
  font-size: 20px;
  font-weight: 300;
  color: white;
`

const text = `
  Designed and built by Max Peterson.
`

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContent>
        <Footnote>
          {text}
        </Footnote>
      </FooterContent>
    </FooterBackground>
  )
}