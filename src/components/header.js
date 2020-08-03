import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Background } from "../styles/components/background";

const HeaderBackground = styled(Background) `
  background-color: white;
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
  color: black;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.25s;
  &:hover {
    color: white;
    background: black;
  }
`

const pages = [
  page('About', '/about'),
  page('Projects', '/projects'),
  page('Experience', '/experience')
];

function page(title, path) {
  return {
    title: title,
    path: path
  };
}

export default function Header() {
  return (
    <HeaderBackground>
      <HeaderContent>
        <StyledLink to='/'>
          Max Peterson
        </StyledLink>
        <LinkContainer>
          {pages.map(page => (
            <StyledLink to={page.path} key={page.title}>
              {page.title}
            </StyledLink>
          ))}
        </LinkContainer>
      </HeaderContent>
    </HeaderBackground>
  )
}