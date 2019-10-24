import React from "react"
import { Link } from "gatsby"

const AboutUs = () => <div> 
    <h1>About us</h1>
    <h2>Other sites:</h2>
    <ul>
     <li>
       <Link to="/">Index</Link>
     </li>
     <li>
       <Link to="/Home/AboutUs">Blog</Link>
     </li>
     <li>
       <Link to="/Home/Contact">Contact</Link>
     </li>
     <li>
       <Link to="/Home/MyGallery">My Gallery</Link>
     </li>
   </ul>
    </div>
   
export default AboutUs
