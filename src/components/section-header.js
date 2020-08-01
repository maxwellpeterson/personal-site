import React from "react"
import styled from "styled-components"

const SectionTitle = styled.span`
  font-size: 48px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${props => props.underlineColor};
  display: block;
  width: 100%;
`

export default function SectionHeader({ title, underlineColor }) {
  return (
    <SectionTitle underlineColor={underlineColor}>
      {title}
    </SectionTitle>
  )
}