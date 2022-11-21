import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import styled from 'styled-components'
//Import styles from Components as needed

const styledLink = styled.Link`
font-size: 1em;
`

const comicPage = ({data}) => {
    const {title, description, image, next, previous} = data.contentfulComics;
    const nextPath = `/${next.slug}`;
    const prevPath = `/${previous.slug}`



    return (
      <Layout>
        <h1>{title}</h1>
        <GatsbyImage image={image.gatsbyImageData} />
        <div className='comicDesc'
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        ></div>
        <div>
          <Link to={prevPath} className="Previous_Comic">Previous Comic</Link>
          <Link to={nextPath} className="Next_Comic">Next Comic</Link>
        </div>
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
      next{
        slug
      }
      previous{
        slug
      }
    }
  }
`