import React from "react"
import styled from "styled-components"

const EntryContainer = styled.div`
  padding: 25px 0;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Heading = styled.span`
  font-size: 32px;
`

const SecondHeading = styled.span`

`

const SubHeader = styled(SecondHeading)`
  display: block;
  padding-top: 5px;
`

const DescriptionList = styled.ul`
  margin: 0;
  padding-top: 5px;
  padding-left: 25px;
`

const ListItem = styled.li`
  list-style-type: none;
  position: relative;

&:before {
  content: '-';
  font-weight: 400;
  position: absolute;
  left: -0.75em;
}
`

export default function ExperienceEntry({ position, organization, duration, location, description, skills }) {
  return (
    <EntryContainer>
      <HeadingContainer>
        <Heading>
          {position}
        </Heading>
        <SecondHeading>
          {duration}
        </SecondHeading>
      </HeadingContainer>
      <SubHeader>
        {organization + ", " + location}
      </SubHeader>
      <DescriptionList>
        {description.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </DescriptionList>
    </EntryContainer>
  )
}