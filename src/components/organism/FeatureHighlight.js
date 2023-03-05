import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'

const FeatureHighlightContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.lightGray};
`


const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 80px ;
  padding: 0px 100px 100px 100px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${screen.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${screen.mobile}) {
    padding: 0 60px 100px 60px;
  }


  & > h2 {
    font-size: ${fontsize.h2};
    font-weight: 600;

    @media screen and (max-width: ${screen.tablet}) {
      margin-bottom: 30px;
    }
  }
`

const ItemContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${screen.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`


const Item = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  border-radius: 15%;

  @media screen and (max-width: ${screen.tablet}) {
    margin-top: 30px;
    width: 100%;
    height: 150px;
    flex-direction: row;
    border-radius: 20px;
  }

  &:not(:first-child) {
    margin-left: 70px;

    @media screen and (max-width: ${screen.tablet}) {
      margin-left: 0;
    }
  }
`

const ItemImage = styled(GatsbyImage)`
  height: 200px;
  object-fit: cover;
  object-position: bottom;
  border-radius: 15%;

  @media screen and (max-width: ${screen.tablet}) {
    height: 150px;
  }
`
const ItemDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontsize.normal};
  font-weight: 600;
  padding: 20px;
  width: 100%;
`

const ShopIcon = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: inline-block;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.3);

  @media screen and (max-width: ${screen.tablet}) {
    width: 55px;
    height: 55px;
    margin-left: 35px;
  }
`

export const FeatureHighlight = React.forwardRef((
  props,
  ref
) => {
  const {
    items,
    heading
  } = props

  return (
    <FeatureHighlightContainer ref={ref}>
      <InnerContainer>
        <h2>{heading}</h2>
        <ItemContainer>
          {items.map((item, index) => (
            <Item key={index}>
              <ItemImage image={getImage(item.image) || item.image} alt="Gold Glasses" objectFit='cover' />
              <ItemDesc>
                <div className='desc'>
                  <h4>{item.productName}</h4>
                  <p>{item.price}</p>
                </div>
                <div className='shop-icons'>
                  <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/shoppee_logo.jpg" href={item.linkShopee} target="_blank" />
                  <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/tokopedia_logo.png" href={item.linkTokopedia} target="_blank" />
                </div>
              </ItemDesc>
            </Item>
          ))}
        </ItemContainer>
      </InnerContainer>
    </FeatureHighlightContainer>
  )
})
