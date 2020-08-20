import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/welcome"
import About from "../components/about"
import Projects from "../components/projects"

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Projects />
      <About />
    </Layout>
  )
}