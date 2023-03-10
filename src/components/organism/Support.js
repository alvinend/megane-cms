import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { RiWhatsappFill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'
import { screen } from '../../utils/screen'
import { fontsize } from '../../utils/fontsize'
import { Image } from '../atom/Image'

const OuterContainer = styled.div`
  width: 100vw;
  position: relative;
`

const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 0;
  align-items: center;
  justify-content: center;

  & > .section-title {
    font-size: ${fontsize.h2};
    font-weight: 600;
    margin-bottom: 15px;
  }

  & > .section-desc {
    font-size: ${fontsize.normal};
    line-height: 2.1;
  }

  @media screen and (max-width: ${screen.tablet}) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`

const SupportVisualContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 500px;
  width: auto;
  min-width: 700px;
  margin: 40px 0 80px 0;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
  }
`

const SupportVisual = styled(Image)`
  background-color: ${color.red};
  width: 40%;
  height: 100%;

  @media screen and (max-width: ${screen.mobile}) {
    width: 100%;
  }

  &:first-child {
    margin-top: 40px;

    @media screen and (max-width: ${screen.mobile}) {
      display: none;
    }
  }
`

const ContactInfoContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${screen.mobile}) {
    flex-direction: column;
  }
`

const StoreInfo = styled.div`
  padding-right: 60px;
  border-right: 2px solid ${color.black};

  @media screen and (max-width: ${screen.mobile}) {
    padding: 0;
    border-right: 0;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 2px solid ${color.black};
  }

  & > h4 {
    font-size: ${fontsize.h3};
  }

  & .item-container {
    display: flex;
    font-size: ${fontsize.normal};
    text-align: center;
    justify-content: center;
  }

  & .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    &:first-child {
      margin-right: 20px;
    }
  }

  & .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #fff;
    margin-bottom: 8px;

    & > img {
      width: 70%;
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`

const ContactInfo = styled.div`
  padding-left: 60px;

  @media screen and (max-width: ${screen.mobile}) {
    padding: 0;
  }

  & > h4 {
    font-size: ${fontsize.h3};
  }

  & .item-container {
    display: flex;
    flex-direction: column;
    font-size: ${fontsize.normal};
    text-align: center;
  }

  & .logo-container {
    display: flex;
    align-items: center;
    margin: 20px 20px 0 0;
    color: inherit;
    text-decoration: none;
  }

  & .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontsize.h3};
    line-height: 0px;
    margin-right: 12px;
  }
`

export const Support = React.forwardRef((props, ref) => {
  const {
    heading,
    subheading,
    goToStoreLabel,
    linkShopee,
    linkTokopedia,
    contactUsLabel,
    whatsAppNumber,
    email,
    image1,
    image2,
  } = props

  return (
    <OuterContainer>
      <SupportContainer ref={ref}>
        <h2 className="section-title">{heading}</h2>
        <div className="section-desc">{subheading}</div>
        <SupportVisualContainer>
          <SupportVisual image={image1} />
          <SupportVisual image={image2} />
        </SupportVisualContainer>
        <ContactInfoContainer>
          <StoreInfo>
            <h4>{goToStoreLabel}</h4>
            <div className="item-container">
              <a
                href={linkTokopedia}
                className="logo-container"
                target="_blank"
              >
                <div className="image-container">
                  <img
                    src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/support/tokopedia.png"
                    alt="Logo Tokopedia"
                  />
                </div>
                <span>Tokopedia</span>
              </a>

              <a href={linkShopee} className="logo-container" target="_blank">
                <div className="image-container">
                  <img
                    src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/support/shopee.png"
                    alt="Logo Shopee"
                  />
                </div>
                <span>Shopee</span>
              </a>
            </div>
          </StoreInfo>

          <ContactInfo>
            <h4>{contactUsLabel}</h4>
            <div className="item-container">
              <a
                className="logo-container"
                href="https://wa.me/628113509306"
                target="_blank"
              >
                <div className="image-container">
                  <RiWhatsappFill />
                </div>
                <span>{whatsAppNumber}</span>
              </a>

              <div className="logo-container">
                <div className="image-container">
                  <GrMail />
                </div>
                <span>{email}</span>
              </div>
            </div>
          </ContactInfo>
        </ContactInfoContainer>
      </SupportContainer>
    </OuterContainer>
  )
})
