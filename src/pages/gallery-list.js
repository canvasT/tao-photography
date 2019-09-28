import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './gallery-list.css'

class GalleryList extends React.Component {
  render() {
    const photoGalleryList = get(this, 'props.data.allContentfulPhotoGallery.edges')

    return (
      <div className='gallery-list' style={{ background: '#fff' }}>
        {
          photoGalleryList.map((gallery, index) => {
            return <a href={`/gallery/${gallery.node.id}`} key={gallery.node.title.id}>
              <div className='gallery'>
                <img className='cover' src={gallery.node.coverImage.file.url}></img>
                <h2>{gallery.node.title.title}</h2>
              </div>
            </a>
          })
        }
      </div>
    )
  }
}

export default GalleryList

export const pageQuery = graphql`
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
`
