import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"

const text = `
  I'm a student and software developer based out of Boston, MA and San Francisco, CA. As an
  undergraduate at Northeastern University, I currently spend most of my time <doing some stuff>. 
  <something about spring 2021 co-op>. Outside of programming, I enjoy cycling,  cooking, and 
  Formula One.
`

export default function About({ focus }) {
  return (
    <Background>
      <Content>
        <SectionHeader title="About" />
        <SectionBody text={text} />
      </Content>
    </Background>
  )
}