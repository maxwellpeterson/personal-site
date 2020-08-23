import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Background from "styles/components/background"
import WideContent from "styles/components/wide-content"

const FooterBackground = styled(Background)`
  background-color: black;
`

const Footnote = styled.p`
  padding 25px 25px;
  font-size: 20px;
  color: white;
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
      <WideContent>
        <Footnote>
          {text}
        </Footnote>
        <div>
          {media.map(item => (
            <a key={item.icon.name} href={item.link} rel="noreferrer" target="_blank">
              <MediaLogo icon={[item.icon.type, item.icon.name]} color={item.color} />
            </a>
          ))}
        </div>
      </WideContent>
    </FooterBackground>
  )
}