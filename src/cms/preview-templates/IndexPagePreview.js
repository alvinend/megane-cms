import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { StyleSheetManager } from 'styled-components'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const iframe = document.querySelector('#preview-pane')
  const iframeHeadElem = iframe.contentDocument.head

  if (data) {
    console.log('BBBBBB')
    console.log({
      ...data.features,
      items: data.features.items.map((item) => ({
        ...item,
        image: getAsset(item.image),
      })),
    })

    return (
      <StyleSheetManager target={iframeHeadElem}>
        <IndexPageTemplate
          linkShopee={data.linkShopee}
          linkTokopedia={data.linkTokopedia}
          linkInstagram={data.linkInstagram}
          linkFacebook={data.linkFacebook}
          linkWhatsapp={data.linkWhatsapp}
          whatsAppNumber={data.whatsAppNumber}
          email={data.email}
          jumbotronMetadata={{
            ...data.jumbotron,
            image: getAsset(data.jumbotron.image),
          }}
          featuresMetadata={{
            ...data.features,
            items: data.features.items.map((item) => ({
              ...item,
              image: getAsset(item.image),
            })),
          }}
          strongPointsMetadata={{
            ...data.strongPoints,
            items: data.strongPoints.items.map((item) => ({
              ...item,
              image: getAsset(item.image),
            })),
          }}
          testimoniesMetadata={{
            ...data.testimonies,
            items: data.testimonies.items.map((item) => ({
              ...item,
              authorImage: getAsset(item.authorImage),
            })),
          }}
          supportMetadata={{
            ...data.support,
            image1: data.support.image1,
            image2: data.support.image2,
          }}
        />
      </StyleSheetManager>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
