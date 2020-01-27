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
    <div>
      <div className='imgs-container'>
      {
        images.map((image) => {
          return <img className='photo' key={image.photo.id} src={`${image.photo.file.url}?w=800`} />
        })
      }
      </div>
      <Link className='btn-nav-back' to='/gallery-list/'>
        <img src={withPrefix('/nav-back.png')}></img>
      </Link>

      <Link className='btn-back-home' to='/'>
        <img src={withPrefix('/icon-home.png')}></img>
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
