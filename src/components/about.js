import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from '../styles/components/content'

const AboutBackground = styled(Background)`
  background-color: #d9d9d9;
`

const AboutContent =  styled(Content)`
  flex-direction: column;
  height: 100vh;
`

export default function About() {
  return (
    <AboutBackground>
      <AboutContent>

      </AboutContent>
    </AboutBackground>
  )
}