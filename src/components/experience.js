import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"

const text = `
  I am a platapus.
`

export default function Experience({ focus }) {
  return (
    <Background>
      <Content>
        <SectionHeader title="Experience" />
        <SectionBody text="Put experience here." />
      </Content>
    </Background>
  )
}