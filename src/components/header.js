import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "typeface-cooper-hewitt"
import { HEADER_TEXT, HEADER_ALT } from '../styles/colors'
import { Background } from "../styles/components/background";

const HeaderBackground = styled(Background) `
  background-color: ${HEADER_ALT};
  position: fixed;
  width: 100%;
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
  font-family: 'Cooper Hewitt';
  font-size: 32px;
  font-weight: 300;
  color: ${HEADER_TEXT};
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.25s;
  &:hover {
    color: ${HEADER_ALT};
    background: ${HEADER_TEXT};
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
          {pages.map(page =>{
            return (
              <StyledLink to={page.path} key={page.title}>
                {page.title}
              </StyledLink>
            )
          })}
        </LinkContainer>
      </HeaderContent>
    </HeaderBackground>
  )
}