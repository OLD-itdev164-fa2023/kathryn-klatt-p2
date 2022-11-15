import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Best Company"/>
<ul>
{
  data.allContentfulComics.edges.map(edge =>(
    <li key={edge.node.id}>
    <Link to={edge.node.title}>{edge.node.title}</Link>
    <div>
      <GatsbyImage image={edge.node.image.gatsbyImageData}/>
    </div>
    <div>
      </div>
    </li>
  ))
}
</ul>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulComics {
      edges {
        node {
          title
          id
          description {
            raw
          }
          image {
            url
            gatsbyImageData (width:300)
          }
        }
      }
    }
  }
`