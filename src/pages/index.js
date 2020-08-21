import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/index-page/welcome"
import About from "../components/index-page/about"
import Projects from "../components/index-page/projects"

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Projects />
      <About />
    </Layout>
  )
}