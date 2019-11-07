import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin

const IndexPage = ({ data }) => {
  console.log("Data iz indexa", data)
  return (
    <Layout>
      <h1>Predavanja</h1>
      {/* <img src={"../static/slika.jpg"} alt="Logo" /> */}
      {/*<Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="Gatsby Docs are awesome"/> */}
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid} />
      ))}
      <h2 style={{ backgroundColor: "pink", color: "grey" }}>
        Sadrzaj ispod slici
      </h2>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//content/images//" } }) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
