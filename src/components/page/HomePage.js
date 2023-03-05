import * as React from 'react'
import styled from 'styled-components'
import { FeatureHighlight } from '../organism/FeatureHighlight'
import { Footer } from '../organism/Footer'
import { Jumbotron } from '../organism/Jumbotron'
import { TestimonyList } from '../organism/TestimonyList'
import { StrongPoint } from '../organism/StrongPoint'
import { Support } from '../organism/Support'
import { Topbar } from '../organism/Topbar'
import { getImage } from 'gatsby-plugin-image'

const HomePageContainer = styled.div`
  overflow-x: hidden;
`

const FloatingContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  bottom : 20px;
  right: 20px;
  z-index: 999;
`

const ShopIcon = styled.a`
  width: 90px;
  height: 90px;
  display: inline-block;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.3);
`

export const HomePage = ({
  linkShopee,
  linkTokopedia,
  linkFacebook,
  linkWhatsapp,
  whatsAppNumber,
  email,
  jumbotronMetadata,
  featuresMetadata,
  strongPointsMetadata,
  testimoniesMetadata,
  supportMetadata,
}) => {
  const jumbotronRef = React.useRef(null)
  const featureRef = React.useRef(null)
  const strongPointRef = React.useRef(null)
  const productRef = React.useRef(null)
  const supportRef = React.useRef(null)

  return (
    <HomePageContainer>
      <Jumbotron
        ref={jumbotronRef}
        title={jumbotronMetadata.title}
        image={getImage(jumbotronMetadata.image) || jumbotronMetadata.image}
        description={jumbotronMetadata.description}
        shopNowLabel={jumbotronMetadata.shopNowLabel}
        linkShopee={linkShopee}
        linkTokopedia={linkTokopedia}
      />
      
      <FeatureHighlight
        ref={featureRef}
        heading={featuresMetadata.heading}
        items={featuresMetadata.items}
      />
      
      <StrongPoint
        ref={strongPointRef}
        heading={strongPointsMetadata.heading}
        subheading={strongPointsMetadata.heading}
        items={strongPointsMetadata.items}
      />

      <TestimonyList
        ref={productRef}
        heading={testimoniesMetadata.heading}
        subheading={testimoniesMetadata.subheading}
        items={testimoniesMetadata.items}
      />
      
      <Support
        ref={supportRef}
        heading={supportMetadata.heading}
        subheading={supportMetadata.subheading}
        goToStoreLabel={supportMetadata.goToStoreLabel}
        contactUsLabel={supportMetadata.contactUsLabel}
        linkFacebook={linkFacebook}
        linkWhatsapp={linkWhatsapp}
        whatsAppNumber={whatsAppNumber}
        email={email}
      />
      
      <Footer
        linkFacebook={linkFacebook}
        linkWhatsapp={linkWhatsapp}
        whatsAppNumber={whatsAppNumber}
        email={email}
      />
      {/* <Topbar
        jumbotronRef={jumbotronRef}
        featureRef={featureRef}
        strongPointRef={strongPointRef}
        productRef={productRef}
        supportRef={supportRef}
      /> */}
      {/* <FloatingContainer>
        <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/shoppee_logo.jpg" href="https://shopee.co.id/shop/487039321/" />
        <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/tokopedia_logo.png" href="https://www.tokopedia.com/meganeofficial" />
      </FloatingContainer> */}
    </HomePageContainer>
  )
}
