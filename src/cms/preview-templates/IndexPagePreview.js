import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        linkShopee={data.linkShopee}
        linkTokopedia={data.linkTokopedia}
        linkInstagram={data.linkInstagram}
        linkFacebook={data.linkFacebook}
        linkWhatsapp={data.linkWhatsapp}
        whatsAppNumber={data.whatsAppNumber}
        email={data.email}
        jumbotronMetadata={data.jumbotron}
        featuresMetadata={data.features}
        strongPointsMetadata={data.strongPoints}
        testimoniesMetadata={data.testimonies}
        supportMetadata={data.support}
      />
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
