import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"
import Background from "styles/components/background"
import WideContent from "styles/components/wide-content"

const HeaderBackground = styled(Background) `
  background: rgba(255, 255, 255, 0.8);
  ${props => props.atTop || "box-shadow: 0 0 15px 5px #D6D6D6"};
  transition: box-shadow 0.2s;
  position: fixed;
  z-index: 999;
`

const LinkContainer = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  padding 25px 25px;
  font-size: 32px;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition:
    color 0.3s,
    border-color 0.2s,
    background 0.3s;
  &.current {
    border-bottom: 2px solid black;
  }
  &:hover {
    color: white;
    background: black;
  }
`

export default function Header({ atTop, primary, secondary }) {
  return (
    <HeaderBackground atTop={atTop}>
      <WideContent>
        <StyledLink to={primary.path}>
          {primary.title}
        </StyledLink>
        <Scrollspy items={secondary.map(link => link.title.toLowerCase())} currentClassName="current" componentTag={LinkContainer}>
          {secondary.map(link => (
            <StyledLink key={link.title} to={link.path}>
              {link.title}
            </StyledLink>
          ))}
        </Scrollspy>
      </WideContent>
    </HeaderBackground>
  )
}