import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin

const Index = ({ data }) => {
  console.log("Data iz indexa", data)
  return (
    <Layout>
      <SEO title="Naslovna" />
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

//grapiql query za dohvacanje slika s content images ja mislim, a ovo tracedSVG je nacin kompresije kad se slika loada ondosno kako ce se loadat
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

export default Index
