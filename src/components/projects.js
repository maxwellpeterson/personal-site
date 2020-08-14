import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"
import ProjectEntry from "./project-entry"

const projectData = [
  {
    image: "",
    path: "",
    title: "Test Project",
    year: "2020",
    description: "Short description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies.",
    skills: ["Python", "OSMNX"]
  }
]

export default function Projects({ focus }) {
  return (
    <Background>
    <Content>
      <SectionHeader title="Projects" />
      <SectionBody text="Put projects here." />
      {projectData.map(entry => (
        <ProjectEntry key={entry.title} {...entry} />
      ))}
    </Content>
  </Background>
  )
}