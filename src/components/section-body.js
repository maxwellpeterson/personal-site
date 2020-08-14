import React from "react"
import styled from "styled-components"

const BodyContent = styled.p`
  padding: 25px 0px;
  font-size: 24px;
  line-height: 1.25;
  text-align: justify;
`

export default function SectionBody({ text }) {
  return (
    <BodyContent>
      {text}
    </BodyContent>
  )
}