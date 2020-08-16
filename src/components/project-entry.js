import React from "react"
import styled from "styled-components"

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`

const ImagePlaceholder = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
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

const EntryTitle = styled.span`
  font-size: 32px;
`

const EntryYear = styled.span`
  font-size: 24px;
`

const EntryDescription = styled.p`
  margin: 0;
  padding-top : 25px;
  text-align: justify;

`

export default function ProjectEntry({ image, path, title, year, description, skills }) {
  return (
    <EntryContainer>
      <ImagePlaceholder>
        Image Placeholder
      </ImagePlaceholder>
      <TextContainer>
        <div>
          <TitleContainer>
            <EntryTitle>
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
          {skills.join(" + ")}
        </EntryDescription>
      </TextContainer>
    </EntryContainer>
  )
}