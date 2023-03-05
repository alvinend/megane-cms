import * as React from 'react'
import styled from 'styled-components'
import { FeatureHighlight } from '../organism/FeatureHighlight'
import { Footer } from '../organism/Footer'
import { Jumbotron } from '../organism/Jumbotron'
import { TestimonyList } from '../organism/TestimonyList'
import { StrongPoint } from '../organism/StrongPoint'
import { Support } from '../organism/Support'
import { Topbar } from '../organism/Topbar'

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

export const HomePage = () => {
  const jumbotronRef = React.useRef(null)
  const featureRef = React.useRef(null)
  const strongPointRef = React.useRef(null)
  const productRef = React.useRef(null)
  const supportRef = React.useRef(null)
  return (
    <HomePageContainer>
      <Jumbotron ref={jumbotronRef}/>
      <FeatureHighlight ref={featureRef}/>
      <StrongPoint ref={strongPointRef}/>
      <TestimonyList ref={productRef}/>
      <Support ref={supportRef}/>
      <Footer />
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
