import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background"
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"
import ProjectEntry from "./project-entry"

const ProjectPanelContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
`

const subheading = `
  Things I've developed on my own, plus a few of my larger course projects.
`

const projectData = [
  {
    image: "",
    path: "",
    title: "Urban Geometry",
    year: "2020",
    description: "Short description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies.",
    skills: ["Python", "OSMNX"]
  },
  {
    image: "",
    path: "https://github.com/maxwellpeterson/personal-site",
    title: "Personal Website",
    year: "2020",
    description: "This very website. My first time working with Gatsby and React.",
    skills: ["Gatsby", "React", "Styled Components"]
  },
  {
    image: "",
    path: "https://github.com/maxwellpeterson/",
    title: "2D Animator",
    year: "2020",
    description: "Lorem ipsum dolor sit amet. Mention MVC. Completed for CS 3500 Object-Oriented Design.",
    skills: ["Java", "Swing"]
  }
]

export default function Projects() {
  return (
    <Background id="projects">
      <Content>
        <SectionHeader title="Projects" />
        <SectionBody text={subheading} />
        <ProjectPanelContainer>
          {projectData.map(entry => (
            <ProjectEntry key={entry.title} {...entry} />
          ))}
        </ProjectPanelContainer>
      </Content>
    </Background>
  )
}