import React from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyle from "../styles/global-style"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}