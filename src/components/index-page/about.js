import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Background from "styles/components/background"
import Content from "styles/components/content"
import SectionTitle from "styles/components/section-title"

const AboutContainer = styled.div`
  padding: 50px 0px;
  display: grid;
  grid-gap: 25px;

  @media (min-width: 600px) {
    grid-template-columns: minmax(150px, auto) auto;
  }
`

const ProfileImage = styled(Img)`
  box-shadow: 0 0 10px 3px #D6D6D6;
`

const Text = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 10px
`

export default function About({ title, image, description }) {
  return (
    <Background id={title.toLowerCase()}>
      <Content>
        <SectionTitle>
          {title}
        </SectionTitle>
        <AboutContainer>
          <ProfileImage fluid={image.childImageSharp.fluid} />
          <Text>
            {description.map(text => (
              <p key={text.slice(0, 25)}>
                {text}
              </p>
            ))}
          </Text>
        </AboutContainer>
      </Content>
    </Background>
  )
}