import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'

const JumbotronContainer = styled.div`
  display: flex;
  width: 100vw;
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
      display: inline;
      margin: 30px auto;
      height: 500px;
      width: auto;
      object-fit: contain;
    }

    @media screen and (max-width: ${screen.mobile}) {
      height: 300px;
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

  & > img {
    width: 70%;
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
  return (
    <JumbotronContainer ref={ref}>
      <RightContainer>
        <h1>
          Kacamata & Lensa
        </h1>

        <img src="/img/kacamata1.jpg" alt="Gold Glasses" className='main-img-mobile' />

        <p>
        Optik kami menawarkan kombinasi yang sempurna antara harga terjangkau dan kualitas tinggi, sehingga pelanggan dapat menikmati pakaian mata yang luar biasa tanpa harus memakai banyak uang.
        </p>

        <div className='shop-icons'>
          <b>Belanja Sekarang </b>
          <div>
            <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/shoppee_logo.jpg" href="https://shopee.co.id/shop/487039321/" target="_blank" />
            <ShopIcon src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/floating-icon/tokopedia_logo.png" href="https://www.tokopedia.com/meganeofficial" target="_blank" />
          </div>
        </div>
      </RightContainer>

      <LeftContainer>
        <img src="/img/kacamata1.jpg" alt="Gold Glasses" />
      </LeftContainer>
    </JumbotronContainer>
  )
})
