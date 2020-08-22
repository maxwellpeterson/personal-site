import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/global-style"

export default function Layout({ page, children }) {

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      header: allHeaderJson {
        edges {
          node {
            links {
              primary {
                title
                path
              }
              secondary {
                title
                path
              }
            }
          }
        }
      }
    }
  `)

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  function handleScroll() {
    let posY = window.scrollY
    if (!atTop && posY === 0) {
      setAtTop(true);
    } else if (atTop && posY > 0) {
      setAtTop(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          {page + " | " + data.site.siteMetadata.title}
        </title>
      </Helmet>
      <GlobalStyle />
      <Header primaryLink={data.header.edges[0].node.links.primary} secondaryLinks={data.header.edges[0].node.links.secondary} atTop={atTop} />
      {children}
      <Footer />
    </>
  )
}