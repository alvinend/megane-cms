import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { BsCircle } from 'react-icons/bs'
import { screen } from '../../utils/screen'
import { RiWhatsappFill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'

const FooterContainer = styled.div`
  overflow-y: hidden;
  padding: 30px 40px;
  background-color: ${color.black};
  color: ${color.white};
  display: flex;
  align-items: center;

  @media screen and (max-width: ${screen.mobile}) {
    flex-direction: column;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  flex-grow: 1;
`

const InfoInnerContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: ${screen.mobile}) {
    width: 100%;
    flex-direction: column;
    border-bottom: 2px solid ${color.white};
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;

  @media screen and (max-width: ${screen.mobile}) {
    text-align: center;
    margin-bottom: 20px;
  }

  & > h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  & > a {
    font-size: 14px;
    color: inherit;
    text-decoration: none;
  }
`

const LogoContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  border-right: 2px solid ${color.white};
  padding-right: 50px;
  margin-right: 50px;

  @media screen and (max-width: ${screen.mobile}) {
    margin: 0;
    padding: 0;
    border-right: 0;
    border-bottom: 2px solid ${color.white};
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  & > .image-container {
    width: 70px;
    margin-right: 30px;

    & > img {
      width: 100%;
    }
  }

  & > span {
    font-size: 45px;
    letter-spacing: 5px;
  }
`

export const Footer = ({
  linkInstagram,
  linkFacebook,
  linkWhatsapp,
  whatsAppNumber,
  email,
}) => {
  return (
    <FooterContainer>
      <LogoContainer>
        <div className="image-container">
          <img src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/topbar/logo_megane_white.png" />
        </div>
        <span>MEGANE</span>
      </LogoContainer>
      <InfoContainer>
        <InfoInnerContainer>
          <InfoList>
            <h4>Social Media</h4>
            <a href={linkInstagram}>Instagram</a>
            <a href={linkFacebook}>Facebook</a>
          </InfoList>

          <InfoList>
            <h4>Contact Info</h4>
            <a href={linkWhatsapp} target="_blank">
              <span className="image-container">
                <RiWhatsappFill />
              </span>
              <span>{whatsAppNumber}</span>
            </a>
            <a>
              <span className="image-container">
                <GrMail />
              </span>
              <span>{email}</span>
            </a>
          </InfoList>
        </InfoInnerContainer>
        Copyright @2023 Megane All Right Reserved
      </InfoContainer>
    </FooterContainer>
  )
}

// Megane Jumbotron Katakana
// Content Text
// Image Original
//
