import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { StyleSheetManager } from 'styled-components'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const iframe = document.querySelector("#preview-pane")
  const iframeHeadElem = iframe.contentDocument.head

  if (data) {
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
            image: getAsset(entry.getIn(['data', 'jumbotron', 'image']))
          }}
          featuresMetadata={data.features}
          strongPointsMetadata={data.strongPoints}
          testimoniesMetadata={data.testimonies}
          supportMetadata={data.support}
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
