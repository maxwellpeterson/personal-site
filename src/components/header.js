import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"
import Background from "styles/components/background"
import IconString from "components/icon-string"

const HeaderBackground = styled(Background)`
  background: rgba(255, 255, 255, 0.8);
  ${(props) => props.atTop || "box-shadow: 0 0 15px 5px #D6D6D6"};
  transition: box-shadow 0.2s;
  position: fixed;
  z-index: 999;
`

const HeaderContent = styled.header`
  max-width: 1250px;
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    justify-content: space-between;
  }
`

const LogoLink = styled(Link)`
  margin: 15px 25px;
  font-size: 2em;
`

const NavLinkContainer = styled.nav`
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

const Header = ({ atTop, logo, links }) => {
  return (
    <HeaderBackground atTop={atTop}>
      <HeaderContent>
        <LogoLink to="/">
          <IconString string={logo.text} colors={logo.colors} />
        </LogoLink>
        <Scrollspy
          items={links.map((link) => link.title.toLowerCase())}
          currentClassName="current"
          componentTag={NavLinkContainer}
        >
          {links.map((link) => (
            <NavLink key={link.title} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </Scrollspy>
      </HeaderContent>
    </HeaderBackground>
  )
}

Header.propTypes = {
  atTop: PropTypes.bool.isRequired,
  logo: PropTypes.exact({
    text: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default Header
