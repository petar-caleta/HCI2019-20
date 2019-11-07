import React from "react"
import Navigation from "./navigation"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

/*
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
*/
const Layout = props => {
  //query od graphiql-a
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            link
            text
          }
        }
      }
    }
  `)
  //console.log("Data from layout:", data)
  //da mozemo Navigation {menuItems} umisto {data.site.siteMetadata}
  const { menuItems } = data.site.siteMetadata
  return (
    <div>
      {props.children}
      <Link to="/">Go Home</Link>
      <Navigation menuItems={menuItems} />
    </div>
  )
}

export default Layout
