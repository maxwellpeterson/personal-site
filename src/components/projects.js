import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"

export default function Projects({ focus }) {
  return (
    <Background>
    <Content>
      <SectionHeader title="Projects" />
      <SectionBody text="Put projects here." />
    </Content>
  </Background>
  )
}