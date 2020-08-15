import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"
import ProjectEntry from "./project-entry"

const ProjectPanelContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
`

const projectData = [
  {
    image: "",
    path: "",
    title: "Test Project",
    year: "2020",
    description: "Short description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies.",
    skills: ["Python", "OSMNX"]
  },
  {
    image: "",
    path: "",
    title: "Personal Website",
    year: "2020",
    description: "This very website, and my first experience with Gatsby and React.",
    skills: ["Gatsby", "React", "Styled Components"]
  },
  {
    image: "",
    path: "",
    title: "2D Animator",
    year: "2020",
    description: "Lorem ipsum dolor sit amet. Completed for CS 3500 Object-Oriented Design.",
    skills: ["Java", "MVC", "Swing"]
  }
]

export default function Projects() {
  return (
    <Background>
      <Content>
        <SectionHeader title="Projects" />
        <SectionBody text="Put projects here." />
        <ProjectPanelContainer>
          {projectData.map(entry => (
            <ProjectEntry key={entry.title} {...entry} />
          ))}
        </ProjectPanelContainer>
      </Content>
    </Background>
  )
}