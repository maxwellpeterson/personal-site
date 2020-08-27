import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Background from "styles/components/background"
import Content from "styles/components/content"
import SectionTitle from "styles/components/section-title"
import SectionSubtitle from "styles/components/section-subtitle"
import ProjectEntry from "components/index-page/project-entry"

const ProjectPanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
`

const Projects = ({ title, description, projects }) => {
  return (
    <Background id={title.toLowerCase()}>
      <Content>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{description}</SectionSubtitle>
        <ProjectPanelContainer>
          {projects.map((project) => (
            <ProjectEntry key={project.title} {...project} />
          ))}
        </ProjectPanelContainer>
      </Content>
    </Background>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Projects
