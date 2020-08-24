import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Background from "styles/components/background"
import WideContent from "styles/components/wide-content"

const FooterBackground = styled(Background)`
  background-color: black;
`

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 50px 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 25px;
  
  @media (min-width: 600px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
    
  }
`

const Footnote = styled.p`
  color: white;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const MediaLogo = styled(FontAwesomeIcon)`
  margin: 8px;
  color: white;
  font-size: 24px;
  transition: color 0.2s;
  &:hover {
    color: ${props => props.color};
  }
`

export default function Footer({ text, media }) {
  return (
    <FooterBackground>
      <FooterContent>
        <Footnote>
          {text}
        </Footnote>
        <FlexContainer>
          {media.map(item => (
            <a key={item.icon.name} href={item.link} rel="noreferrer" target="_blank">
              <MediaLogo icon={[item.icon.type, item.icon.name]} color={item.color} />
            </a>
          ))}
        </FlexContainer>
      </FooterContent>
    </FooterBackground>
  )
}