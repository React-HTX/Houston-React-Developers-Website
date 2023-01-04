import React from "react"
// import Navigation from "./Navigation"
import DrawerAppBar from "./DrawerAppBar"
import "@fontsource/roboto"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      <DrawerAppBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
