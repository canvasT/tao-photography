import React from 'react'
import get from 'lodash/get'
import styles from  './gallery.module.css'

class GalleryTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const images = get(this, 'props.data.contentfulPhotoGallery.images');
    if (images === null || !images) {
      return null;
    }
    
    return (<div className={styles.container}>
      {
        images.map((image) => {
          return <img className={styles.photo} key={image.photo.id} src={`${image.photo.file.url}?w=800`} />
        })
      }
    </div>)
  }
}

export default GalleryTemplate

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