import React from "react"
import styled from "styled-components"
import { Background } from "../../styles/components/background"
import { Content } from "../../styles/components/content"
import SectionHeader from "../section-header"
import SectionBody from "../section-body"
import ProjectEntry from "./project-entry"

const ProjectPanelContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
`

export default function Projects({ title, description, projects }) {
  return (
    <Background id={title.toLowerCase()}>
      <Content>
        <SectionHeader title={title} />
        <SectionBody text={description} />
        <ProjectPanelContainer>
          {projects.map(project => (
            <ProjectEntry key={project.title} {...project} />
          ))}
        </ProjectPanelContainer>
      </Content>
    </Background>
  )
}