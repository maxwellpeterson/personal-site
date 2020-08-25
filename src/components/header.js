import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"
import Background from "styles/components/background"
import WideContent from "styles/components/wide-content"
import IconString from "components/icon-string"

const HeaderBackground = styled(Background) `
  background: rgba(255, 255, 255, 0.8);
  ${props => props.atTop || "box-shadow: 0 0 15px 5px #D6D6D6"};
  transition: box-shadow 0.2s;
  position: fixed;
  z-index: 999;
`

const HeaderContent = styled(WideContent)`
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`

const LogoLink = styled(Link)`
  margin: 15px 25px;
`

const NavLinkContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`

const NavLink = styled(Link)`
  padding 25px 25px;
  font-size: 1.5em;
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

export default function Header({ atTop, logo, links }) {
  return (
    <HeaderBackground atTop={atTop}>
      <HeaderContent>
        <LogoLink to="/">
          <IconString string={logo.text} colors={logo.colors} size={40} />
        </LogoLink>
        <Scrollspy items={links.map(link => link.title.toLowerCase())} currentClassName="current" componentTag={NavLinkContainer}>
          {links.map(link => (
            <NavLink key={link.title} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </Scrollspy>
      </HeaderContent>
    </HeaderBackground>
  )
}