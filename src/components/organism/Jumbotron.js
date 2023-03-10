import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'
import { Image } from '../atom/Image'

const JumbotronContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 0 auto;
  background: ${color.lightGray};
  overflow-x: hidden;
  padding-top: 100px;
  padding-bottom: 20px;

  @media screen and (max-width: ${screen.tablet}) {
    flex-direction: column;
  }
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  max-width: 900px;
  color: ${color.white};
  padding: 0 100px;
  color: ${color.black};

  @media screen and (max-width: ${screen.mobile}) {
    font-size: ${fontsize.h2};
  }

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    padding: 0 60px;
  }

  & > h1 {
    font-size: ${fontsize.h1};
    font-weight: bold;
    
    @media screen and (max-width: ${screen.mobile}) {
      font-size: ${fontsize.h2};
    }
  }

  & > .main-img-mobile {
    display: none;
    border-radius: 20px;

    @media screen and (max-width: ${screen.tablet}) {
      display: block;
      height: auto;
      width: 100%;
      object-fit: cover;
      object-position: center;
      margin: 30px 0;
    }

  }

  & > p {
    font-size: ${fontsize.normal};
    line-height: 2.1;
    margin-bottom: 40px;
  }

  & > .shop-icons {
    display: flex;
    align-items: center;
    font-size: ${fontsize.h3};

    & > div {
      display: flex;

      @media screen and (max-width: ${screen.tablet}) {
        margin-top: 20px;
      }
    }

    @media screen and (max-width: ${screen.tablet}) {
      flex-direction: column;
    }
  }
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    margin-top: 20px;
    display: none;
  }

  & > .main-img {
    width: 70%;
    max-width: 600px;
    border-radius: 10%;
    box-shadow: 0 0 10px rgba(0,0,0,.2);

    @media screen and (max-width: ${screen.tablet}) {
      width: 50%;
    }
  }

  @media screen and (max-width: ${screen.mobile}) {
    display: none;
  }
`

const ShopIcon = styled.a`
  width: 65px;
  height: 65px;
  margin-left: 20px;
  display: inline-block;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.3);
`


export const Jumbotron = React.forwardRef((
  props,
  ref
) => {
  const {
    title,
    image,
    description,
    shopNowLabel,
    linkShopee,
    linkTokopedia
  } = props

  console.log(image)

  return (
    <JumbotronContainer ref={ref}>
      <RightContainer>
        <h1>
          {title}
        </h1>

        <Image
          image={image}
          alt="Gold Glasses"
          className='main-img-mobile'
        />

        <p>{description}</p>

        <div className='shop-icons'>
          <b>{shopNowLabel}</b>
          <div>
            <ShopIcon
              src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/shoppee_logo.jpg"
              href={linkShopee}
              target="_blank"
            />
            <ShopIcon
              src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/tokopedia_logo.png"
              href={linkTokopedia}
              target="_blank"
            />
          </div>
        </div>
      </RightContainer>

      <LeftContainer>
        <Image
          image={image}
          alt="Gold Glasses"
          className='main-img'
        />
      </LeftContainer>
    </JumbotronContainer>
  )
})
