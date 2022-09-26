import React from "react"
import Navigation from "./Navigation"
import "@fontsource/roboto"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default Layout
