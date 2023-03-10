import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'
import { Image } from './Image'

const PointDescContainer = styled.div`
  width: 50%;
  font-size: ${fontsize.normal};
  margin-bottom: 30px;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    padding: 0 40px 30px 40px;
  }

  @media screen and (max-width: ${screen.mobile}) {
    padding: 0 20px 30px 20px;
  }

  & > h3 {
    font-weight: 600;
    font-size: ${fontsize.h3};
    margin-bottom: 30px;
    line-height: 1.6;
  }

  & > div {
    line-height: 2.1;
    font-size: ${fontsize.normal};
  }
`

const StrongPointListContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 80px 20px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: row-reverse;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    flex-direction: column-reverse;
    padding: 0;
  }

  &:nth-child(even) {
    flex-direction: row;

    @media screen and (max-width: ${screen.tablet}) {
      flex-direction: column-reverse;
      padding: 0;
    }

    @media screen and (max-width: ${screen.mobile}) {
      flex-direction: column-reverse;
      padding: 0;
    }
  }

  & b {
    font-weight: 900;
  }
`

const PointVisualContainer = styled(Image)`
  width: 50%;
  min-height: 300px;
  height: 100%;
  margin: 0 30px;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    margin: 80px 0 50px 0;
  }

  & > img {
    width: 100%;
  }
`

const Number = styled.div`
  position: absolute;
  left: 30px;
  top: -60px;
  color: ${color.red};
  font-size: ${fontsize.h1};
  font-weight: 900;
`

export const StrongPointList = ({ imgLink, title, desc, number = '01' }) => {
  console.log('XXXX')
  console.log(imgLink)

  return (
    <StrongPointListContainer>
      <Number>{number}</Number>
      <PointDescContainer>
        <h3>{title}</h3>
        <div>{desc}</div>
      </PointDescContainer>
      <PointVisualContainer image={getImage(imgLink) || imgLink} />
    </StrongPointListContainer>
  )
}
