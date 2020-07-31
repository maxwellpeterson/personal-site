import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"

const AboutBackground = styled(Background)`
  background-color: white;
`

const AboutContent =  styled(Content)`
  flex-direction: column;
  align-items: start;
  flex: auto;
  height: 100vh;
`

export default function About( { focus }) {
  return (
    <AboutBackground>
      <AboutContent>
        <SectionHeader title="About" underlineColor="blue" />
      </AboutContent>
    </AboutBackground>
  )
}