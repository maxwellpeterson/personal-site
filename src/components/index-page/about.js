import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import Background from "styles/components/background"
import Content from "styles/components/content"
import SectionTitle from "styles/components/section-title"

const AboutContainer = styled.div`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 600px) {
    grid-template-columns: minmax(150px, auto) auto;
  }
`

const ProfileImage = styled(Img)`
  box-shadow: 0 0 10px 3px #d6d6d6;
`

const Text = styled.div`
  display: grid;
  grid-gap: 0.75em;
`

const About = ({ title, image, description }) => {
  return (
    <Background id={title.toLowerCase()}>
      <Content>
        <SectionTitle>{title}</SectionTitle>
        <AboutContainer>
          <ProfileImage fluid={image.childImageSharp.fluid} />
          <Text>
            {description.map((text) => (
              <p key={text.slice(0, 25)}>{text}</p>
            ))}
          </Text>
        </AboutContainer>
      </Content>
    </Background>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default About
