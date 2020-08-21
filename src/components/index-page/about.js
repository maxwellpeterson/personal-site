import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Background } from "../../styles/components/background"
import { Content } from "../../styles/components/content"
import SectionHeader from "../section-header"
import SectionBody from "../section-body"

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

const text = [`
  I'm a student and software developer based out of Boston, MA and San Francisco, CA. As an
  undergraduate at Northeastern University, I currently spend most of my time <doing some stuff>. 
  Outside of programming, I enjoy cycling, cooking, and Formula One.
  `,
  `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies. Lorem ipsum dolor 
  sit amet, consectetur adipiscing elit. Aenean ultricies. Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Aenean ultricies.
  `]

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/about/profile.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Background id="about">
      <Content>
        <SectionHeader title="About" />
        <AboutContainer>
          <ProfileImage fluid={data.file.childImageSharp.fluid} />
          {text.map(p => (
            <AboutParagraph key={p.slice(0, 25)} text={p} />
          ))}
        </AboutContainer>
      </Content>
    </Background>
  )
}