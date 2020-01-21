import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
require('./gallery.css')

const IndexPage = ({data}) => {

  const images = data.contentfulPhotoGallery.images

  if (images === null || !images) {
    return null;
  }

  return <Layout>
    <SEO title="gallery" />
    <div className='container'>
      {
        images.map((image) => {
          return <img className='photo' key={image.photo.id} src={`${image.photo.file.url}?w=800`} />
        })
      }
      <Link to={'/gallery-list/'}>
          <img className='btn-nav-back' src={withPrefix('/nav-back.png')}></img>
      </Link>
    </div>
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
query PhotoGallery($galleryId: String!) {
  contentfulPhotoGallery(id: {eq: $galleryId}) {
    id,
    title {
      id,
      title
    }
    coverImage {
      id
      file {
        url
        fileName
        contentType
      }
    }
    author {
      id,
      name
    }
    images {
      id
      photo {
        resolutions {
          width
          height
          src
        }
        file {
          url
          fileName
          contentType
        }
        title
        id
      }
    }
  }
}
`
