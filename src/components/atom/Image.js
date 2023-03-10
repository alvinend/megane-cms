import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const Image = ({ image, alt, ...rest }) => {
  if (!image) {
    return <div />
  }

  if (image.path) {
    const path = image.path.replace('static/img', '/img')

    return <img src={path} {...rest} />
  } else {
    const imageRef = getImage(image)
    return <GatsbyImage image={imageRef} {...rest} />
  }
}
