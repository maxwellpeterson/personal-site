import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Background from "styles/components/background"
import Content from "styles/components/content"
import SectionHeader from "components/section-header"
import SectionBody from "components/section-body"

const AboutContainer = styled.div`
  padding: 50px 0px;
  display: grid;
  grid-template-columns: 20% auto;
  grid-gap: 25px 50px;
`

const ProfileImage = styled(Img)`
  grid-row: 1 / 3;
  box-shadow: 0 0 10px 3px #D6D6D6;
`

const AboutParagraph = styled(SectionBody)`
  margin: 0;
  padding: 0;
  grid-column: 2;
`

export default function About({ title, image, description }) {
  return (
    <Background id={title.toLowerCase()}>
      <Content>
        <SectionHeader title={title} />
        <AboutContainer>
          <ProfileImage fluid={image.childImageSharp.fluid} />
          {/* Not sure if this is the best way to create keys for each paragraph... */}
          {description.map(p => (
            <AboutParagraph key={p.slice(0, 25)} text={p} />
          ))}
        </AboutContainer>
      </Content>
    </Background>
  )
}