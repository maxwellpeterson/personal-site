import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 15px 3px #d6d6d6;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  background: #f0f0f0;
`

const TextContainer = styled.div`
  padding: 25px;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid black;
`

const TitleContainer = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid black;
`

const Title = styled.span`
  font-size: 1.5em;
`

const Year = styled.span``

const Description = styled.p`
  margin: 0;
  padding-top: 1.25em;
`

const ProjectEntry = ({ title, year, image, link, description, tech }) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <EntryContainer>
        <ImageContainer>
          <Img fixed={image.childImageSharp.fixed} />
        </ImageContainer>
        <TextContainer>
          <div>
            <TitleContainer>
              <Title>{title}</Title>
              <Year>{year}</Year>
            </TitleContainer>
            <Description>{description}</Description>
          </div>
          <Description>{tech.join(" + ")}</Description>
        </TextContainer>
      </EntryContainer>
    </a>
  )
}

ProjectEntry.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProjectEntry
