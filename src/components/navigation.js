import React from "react"
import { Link } from "gatsby"

const Navigation = props => {
  console.log("Props for navigation:", props)
  console.log("Hello nav", props)
  return (
    <ul>
      {props.menuItems.map(({ link, text }) => (
        <li key={link}>
          <Link to={link}>{text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
