import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ApartmentCard from "../components/ApartmentCard"
import ApartmentButtonGroup from "../components/ApartmentButtonGroup"
import ApartmentCardGroup from "../components/ApartmentCardGroup"

//importat link od gatsby-a da mozemo linkat pageove na gatsbyev nacin

const Index = () => (
  <Layout>
    <ApartmentCard />
    <ApartmentButtonGroup />
    <ApartmentCardGroup />
  </Layout>
)

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

// const Index = () => {
//   return (
//     <Layout>
//       <SEO title="Naslovna" />

//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="../images/logo.png" />
//         <Card.Body>
//           <Card.Title>Apartment1</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           {<Button variant="primary">Go somewhere</Button>}
//         </Card.Body>
//       </Card>

//       {/* <h1>Predavanja</h1> */}
//       {/* <img src={"../static/slika.jpg"} alt="Logo" /> */}
//       {/*<Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="Gatsby Docs are awesome"/> */}
//       {/* {data.allFile.edges.map(({ node }) => (
//         <Img key={node.id} fluid={node.childImageSharp.fluid} />  ==> Ovo je način na koji smo responzivno loadali slike iz filea za slike
//       ))} */}
//     </Layout>
//   )
// }

//grapiql query za dohvacanje slika s content images ja mislim, a ovo tracedSVG je nacin kompresije kad se slika loada ondosno kako ce se loadat
