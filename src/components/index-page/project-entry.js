import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

const TextContainer = styled.div`
  padding: 25px;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 2px solid black;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const EntryTitle = styled.a`
  font-size: 32px;
  display: inline-block;
  background-image: linear-gradient(darkviolet, darkviolet);
  background-position: bottom left;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition:
    background-size 0.3s,
    background-position 0s 0.3s;
  &:hover {
    background-position: bottom right;
    background-size: 100% 2px;
  }
`

const EntryYear = styled.span`
  font-size: 24px;
`

const EntryDescription = styled.p`
  margin: 0;
  padding-top : 25px;
  text-align: justify;

`

export default function ProjectEntry({ title, year, image, link, description, tech }) {
  return (
    <EntryContainer>
      <ImageContainer>
        <Img fixed={image.childImageSharp.fixed} />
      </ImageContainer>
      <TextContainer>
        <div>
          <TitleContainer>
            <EntryTitle href={link} target="_blank">
              {title}
            </EntryTitle>
            <EntryYear>
              {year}
            </EntryYear>
          </TitleContainer>
          <EntryDescription>
            {description}
          </EntryDescription>
        </div>
        <EntryDescription>
          {tech.join(" + ")}
        </EntryDescription>
      </TextContainer>
    </EntryContainer>
  )
}