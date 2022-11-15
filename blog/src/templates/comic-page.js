import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
//Import styles from Components as needed

const comicPage = ({data}) => {
    const {title, description, image, previous, next} = data.contentfulComics

    return(
        <Layout>
        <h1>{title}</h1>
        <GatsbyImage image={image.gatsbyImageData}/>
        <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div>
        <div>{previous}</div>
        <div>{next}</div>
        </Layout>
    )
}

export default comicPage;

export const pageQuery = graphql`
  query comicQuery($slug: String!) {
    contentfulComics(slug: { eq: $slug }) {
      title
      slug
      description {
        childMarkdownRemark {
            html
          excerpt
        }
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 960)
        url
      }
    }
  }
`