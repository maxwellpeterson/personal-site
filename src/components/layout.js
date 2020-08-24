import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faStrava, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Header from "components/header"
import Footer from "components/footer"
import GlobalStyle from "styles/global-style"

/* In addition to manually importing style sheet above, fixes sixing bug when icons are being loaded... */
config.autoAddCss = false

/* These icons can now be accessed by string reference elsewhere. Useful for getting icon data from external source. Could also import entire fab library... */
library.add(faPaperPlane, faLinkedinIn, faGithub, faStrava)

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
            logo {
              childImageSharp {
                fixed(height: 48, quality: 100) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
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
      <Header atTop={atTop} {...data.header.edges[0].node} />
      {children}
      <Footer {...data.footer.edges[0].node}/>
    </>
  )
}