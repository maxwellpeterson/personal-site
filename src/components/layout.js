import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "components/seo"
import GlobalStyle from "styles/global-style"
import Header from "components/header"
import Footer from "components/footer"

const Layout = ({ title, description, image, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      header: allHeaderJson {
        edges {
          node {
            logo {
              text
              colors
            }
            links {
              title
              path
            }
          }
        }
      }
      footer: allFooterJson {
        edges {
          node {
            text
            media {
              title
              icon {
                type
                name
              }
              color
              link
            }
          }
        }
      }
    }
  `)

  const [atTop, setAtTop] = useState(true)

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
      setAtTop(true)
    } else if (atTop && posY > 0) {
      setAtTop(false)
    }
  }

  return (
    <>
      <SEO title={title} description={description} image={image} />
      <GlobalStyle />
      <Header atTop={atTop} {...data.header.edges[0].node} />
      <main>{children}</main>
      <Footer {...data.footer.edges[0].node} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
