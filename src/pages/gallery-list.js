import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import get from 'lodash/get'
import { useStaticQuery, graphql } from "gatsby"
require('./gallery-list.css')

const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
    query PhotoGalleryList {
      allContentfulPhotoGallery {
        edges {
          node {
            id
            author {
              id
              name
            }
            coverImage {
              id
              title
              file {
                url
                fileName
                contentType
              }
            }
            title {
              title
              id
            }
          }
        }
      }
    }
  `)

  const photoGalleryList = data.allContentfulPhotoGallery.edges

  return <Layout>
    <SEO title="gallery list" />
    <div>
      <div className='gallery-list' style={{ background: '#fff' }}>
        {
          photoGalleryList.map((gallery, index) => {
            return <a className='gallery' href={withPrefix(`/gallery/${gallery.node.id}`)} key={gallery.node.title.id}>
              <div>
                <img className='cover' src={gallery.node.coverImage.file.url + '?w=220'}></img>
                <h2>{gallery.node.title.title}</h2>
              </div>
            </a>
          })
        }
      </div>
      <Link className='btn-nav-back' to='/'>
        <img src={withPrefix('/nav-back.png')}></img>
      </Link>
    </div>
  </Layout>
}

export default IndexPage
