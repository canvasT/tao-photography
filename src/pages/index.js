import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './index.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const banner = get(this, 'props.data.contentfulImage.photo.file')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <h1 className='title'>Tao Photography</h1>
        <a href='./gallery-list/'>
          <img className='banner' src={`${banner.url}?w=1200`} />
        </a>
      </div>
    )
  }
}

export default RootIndex

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
