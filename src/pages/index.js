import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import get from 'lodash/get'
require('./index.css')

const IndexPage = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const banner = get(props, 'data.contentfulImage.photo.file')

  return <Layout>
    <SEO title={siteTitle} />
    <div className="content">
      <h1 className='title'>Tao Photography</h1>
      <Link to='/gallery-list/'>
        <img className='banner' alt="banner" src={`${banner.url}?w=1200`} />
      </Link>
      <Link to='/gallery-list/'>
        <p className='link-enter'>Enter</p>
      </Link>
    </div>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    contentfulImage(title: {eq: "banner of homepage"}) {
      photo {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
