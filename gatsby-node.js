const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const GalleryTemplate = path.resolve('./src/templates/gallery.js')
    resolve(
      graphql(
        `
          {
            allContentfulPhotoGallery {
              edges {
                node {
                  id
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const galleries = result.data.allContentfulPhotoGallery.edges
        galleries.forEach((post, index) => {
          createPage({
            path: `/gallery/${post.node.id}/`,
            component: GalleryTemplate,
            context: {
              galleryId: post.node.id
            },
          })
        })
      })
    )
  })
}