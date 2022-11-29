import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { IconButton } from '../components/Button'
import styled from 'styled-components'
import {Previous} from '@styled-icons/fluentui-system-filled/Previous'
import { Next } from "@styled-icons/fluentui-system-filled/Next"
//Import styles from Components as needed

const Vspaced = styled.div`
  margin: 3em 0 3em 0;
  text-align: center;
`
const H2 = styled.h2`
  text-shadow: 1px 1px #005073;
`
const Stroke = styled.strong`
  text-shadow: 1px 1px #005073;
`

const Spaced = styled.span`
  margin-right: 15rem;
`;

const comicPage = ({data}) => {
    const {title, description, image, next, previous} = data.contentfulComics;
    const nextPath = `/${next.slug}`;
    const prevPath = `/${previous.slug}`



    return (
      <Layout>
        <h1>{title}</h1>
        <GatsbyImage image={image.gatsbyImageData} />
        <H2
          className="comicDesc"
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        ></H2>
        <Vspaced>
          <Link to={prevPath} className="Previous_Comic">
            <IconButton icon={<Previous />} /> <Stroke>Previous Comic</Stroke>
          </Link>
          <Spaced></Spaced>
          <Link to={nextPath} className="Next_Comic">
            <Stroke>Next Comic </Stroke><IconButton icon={<Next />} />
          </Link>
        </Vspaced>
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