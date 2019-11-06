import React from "react"
import Navigation from "./navigation"
import { Link } from "gatsby"

const menuItems = [
  {
    text: "About Us",
    link: "/AboutUs",
  },
  {
    text: "Blog",
    link: "/Blog",
  },
  {
    text: "Contact",
    link: "/Contact",
  },
  {
    text: "My Gallery",
    link: "/MyGallery",
  },
]

const Layout = props => {
  return (
    <div>
      <Navigation menuItems={menuItems} />
      {props.children}
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Layout
