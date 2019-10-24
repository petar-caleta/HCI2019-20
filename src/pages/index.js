import React from "react"
import { Link } from "gatsby"
//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin


const IndexPage = () => <div> 
   <h1>Project start</h1> 
   <h2>Sites:</h2>   
   <ul>
     <li>
       <Link to="/Home/Blog">Blog</Link>
     </li>
     <li>
       <Link to="/Home/AboutUs">About Us</Link>
     </li>
     <li>
       <Link to="/Home/Contact">Contact</Link>
     </li>
     <li>
       <Link to="/Home/MyGallery">My Gallery</Link>
     </li>
   </ul>
  </div>
   //unordered list za stranice linkat
   //kad smo link importali od gatsby linkamo pomocu <Link> i sa pathom otic
export default IndexPage 