import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import Welcome from "components/index-page/welcome"
import Projects from "components/index-page/projects"
import About from "components/index-page/about"

export default function Home({ data }) {
  return (
    <Layout page="Home">
      <Welcome {...data.welcome.edges[0].node}/>
      <Projects {...data.projects.edges[0].node} />
      <About {...data.about.edges[0].node} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    welcome: allWelcomeJson {
      edges {
        node {
          greeting
        }
      }
    }
    projects: allProjectsJson {
      edges {
        node {
          title
          description
          projects {
            title
            year
            image {
              childImageSharp {
                fixed(height: 250, quality: 100) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            link
            description
            tech
          }
        }
      }
    }
    about: allAboutJson {
      edges {
        node {
          title
          image {
            childImageSharp {
              fluid(maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`