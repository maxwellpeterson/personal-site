import React from "react"
import styled from "styled-components"
import { Background } from "../styles/components/background";
import { Content } from "../styles/components/content"
import SectionHeader from "./section-header"
import SectionBody from "./section-body"
import ExperienceEntry from "./experience-entry";

const experienceEntries = [
  {
    position: "Position",
    organization: "Organization",
    duration: "Duration",
    location: "Location",
    description: [
      "Did a thing",
      "Did another thing"
    ],
    skills: []
  },
  {
    position: "Research Assistant",
    organization: "Operations Research and Social Justice Lab",
    duration: "September to December 2019",
    location: "Northeastern University",
    description: [
      "Conducted a literature review on multi-period, multi-objective supply chain modeling",
      "Co-authored 'A two-stage stochastic programming model for supply chain networks under disruption' for 2020 INFORMS TSL Conference"
    ],
    skills: []
  }
]

export default function Experience({ focus }) {
  return (
    <Background>
      <Content>
        <SectionHeader title="Experience" />
        <SectionBody text="Put experience here." />
        {experienceEntries.map(entry => (
          <ExperienceEntry key={entry.organization + entry.duration} {...entry} />
        ))}
      </Content>
    </Background>
  )
}