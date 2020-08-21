import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Scrollspy from "react-scrollspy"
import { Background } from "../styles/components/background"

const HeaderBackground = styled(Background) `
  background: rgba(255, 255, 255, 0.8);
  box-shadow: ${props => props.atTop ? "none" : "0 0 15px 5px #D6D6D6"};
  transition: box-shadow 0.3s;
  position: fixed;
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
    border-color 0.3s,
    background 0.3s;
  &.current-section {
    border-bottom: 2px solid black;
  }
  &:hover {
    color: white;
    background: black;
  }
`

const pageData = [
  {
    title: "Projects",
    path: "/#projects"
  },
  {
    title: "About",
    path: "/#about"
  }
]

export default function Header({ atTop }) {
  return (
    <HeaderBackground atTop={atTop}>
      <HeaderContent>
        <StyledLink to="/">
          Max Peterson
        </StyledLink>
        <Scrollspy items={["projects", "about"]} currentClassName="current-section" componentTag={LinkContainer}>
          {pageData.map(page => (
            <StyledLink to={page.path} key={page.title}>
              {page.title}
            </StyledLink>
          ))}
        </Scrollspy>
      </HeaderContent>
    </HeaderBackground>
  )
}