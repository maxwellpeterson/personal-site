import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Scrollspy from "react-scrollspy"
import { Background } from "../styles/components/background"

const HeaderBackground = styled(Background) `
  background: rgba(255, 255, 255, 0.8);
  box-shadow: ${props => props.atTop ? "none" : "0 0 15px 5px #D6D6D6"};
  transition: box-shadow 0.2s;
  position: fixed;
  z-index: 999;
`

const HeaderContent = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex: auto;
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
  &.current-section {
    border-bottom: 2px solid black;
  }
  &:hover {
    color: white;
    background: black;
  }
`

export default function Header({ primaryLink, secondaryLinks, atTop }) {
  return (
    <HeaderBackground atTop={atTop}>
      <HeaderContent>
        <StyledLink to={primaryLink.path}>
          {primaryLink.title}
        </StyledLink>
        <Scrollspy items={secondaryLinks.map(link => link.title.toLowerCase())} currentClassName="current-section" componentTag={LinkContainer}>
          {secondaryLinks.map(link => (
            <StyledLink to={link.path} key={link.title}>
              {link.title}
            </StyledLink>
          ))}
        </Scrollspy>
      </HeaderContent>
    </HeaderBackground>
  )
}