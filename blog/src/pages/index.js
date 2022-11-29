import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Best Company" />
    <div>
      <StaticImage alt="Penty says: Good luck, have fun, no unions." title="lol but srsly" src="https://images.ctfassets.net/y8mz9gdf2vff/2D0UPMldbFmF43ehuwL4vF/f2adb40adb2c2b474414981642cdccb8/penty.png" />
    </div>
    <ul>
      {data.allContentfulComics.edges.map(edge => (
        <h1><li key={edge.node.id}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
        </li></h1>
      ))}
    </ul>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulComics(sort: { order: ASC }) {
      edges {
        node {
          order
          title
          id
          slug
          image {
            url
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  allContentfulEmployee {
    edges {
      node {
        id
      }
    }
  }
}
`