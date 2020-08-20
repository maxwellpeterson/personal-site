import React, { useState, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/global-style"

export default function Layout({ children }) {

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
      <GlobalStyle />
      <Header atTop={atTop} />
      {children}
      <Footer />
    </>
  )
}