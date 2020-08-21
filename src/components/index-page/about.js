import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Background } from "../../styles/components/background"
import { Content } from "../../styles/components/content"
import SectionHeader from "../section-header"
import SectionBody from "../section-body"

const AboutContainer = styled.div`
  display: flex;
`

const ProfileImage = styled.div`
  width: 400px:
  height: 558px;
`

const text = `
  I'm a student and software developer based out of Boston, MA and San Francisco, CA. As an
  undergraduate at Northeastern University, I currently spend most of my time <doing some stuff>. 
  <something about spring 2021 co-op>. Outside of programming, I enjoy cycling,  cooking, and 
  Formula One.
`

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
          <ProfileImage>
            <Img fluid={data.file.childImageSharp.fluid} />
          </ProfileImage>
          <SectionBody text={text} />
        </AboutContainer>
      </Content>
    </Background>
  )
}