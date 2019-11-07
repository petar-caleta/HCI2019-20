import React from "react"
import { Link } from "gatsby"

const ulNavStyle = {
  display: "flex",
  marginsTop: "10px",
}

const navLiItem = {
  margins: "20 px",
  padding: "20 px",
  border: "2px solid black",
  backgroundColor: "pink",
  textDecoration: "none",
  float: "right",
}

const Navigation = props => {
  return (
    <ul style={ulNavStyle}>
      {props.menuItems.map(({ link, text }) => (
        <li style={navLiItem} key={link}>
          <Link to={link}>{text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
