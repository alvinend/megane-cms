import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'

const TestimonyListContainer = styled.div`
  width: 100vw;
  position: relative;
  background-color: ${color.lightGray};
`
const TestimonyListInnerContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;

  @media screen and (max-width: ${screen.tablet}) {
    width: calc(100% - 40px);
    margin: 0 20px;
    flex-direction: column;
    align-items: center;
  }
`

const OverviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 480px;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
  }
`

const OverviewDescContainer = styled.div`
  width: 100%;
  max-width: 800px;
  color: ${color.black};
  line-height: 1.8;
  font-size: ${fontsize.normal};

  & > h3 {
    display: inline-block;
    font-size: ${fontsize.h2};
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.6;
  }
`

const TestimonyContainer = styled.div`
  width: 60%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${screen.tablet}) {
    width: 100%;
    flex-direction: column;
  }
`

const GlassBox = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  width: 80%;
  margin-left: 20%;
  margin-bottom: 70px;
  background: rgba(239, 46, 69, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.9px);
  -webkit-backdrop-filter: blur(1.9px);
  border: 1px solid rgba(239, 46, 69, 0.36);

  &:nth-child(even) {
    margin-left: 0;
  }

  @media screen and (max-width: ${screen.tablet}) {
    margin-left: 0;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${screen.mobile}) {
    width: 100%;
  }
`

const GlassBoxImg = styled(GatsbyImage)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: ${screen.mobile}) {
    display: none;
  }
`

const GlassBoxImgMobile = styled(GatsbyImage)`
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 15px;

  @media screen and (max-width: ${screen.mobile}) {
    display: inline-block;
  }
`

const GlassBoxContent = styled.div` 
  margin-left: 20px;
  font-size: ${fontsize.normal};
  line-height: 2.1;

  @media screen and (max-width: ${screen.mobile}) {
    margin: 0;
  }
`

const GlassBoxDesc = styled.div`
  color: ${color.black};
  margin-bottom: 20px;
`

const GlassBoxAuthor = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontsize.normal};
  font-weight: 600;
`

export const TestimonyList = React.forwardRef((
  props,
  ref
) => {
  const {
    heading,
    subheading,
    items
  } = props

  return (
    <TestimonyListContainer ref={ref}>
      <TestimonyListInnerContainer>
        <OverviewContainer>
          <OverviewDescContainer>
            <h3 className="section-title">{heading}</h3>
            <div>{subheading}</div>
          </OverviewDescContainer>
        </OverviewContainer>
        <TestimonyContainer>
          {items.map((item, i) => (
            <GlassBox key={i}>
              <GlassBoxImg image={getImage(item.authorImage) || item.authorImage} />
              <GlassBoxContent>
                <GlassBoxDesc>{item.description}</GlassBoxDesc>
                <GlassBoxAuthor>
                  <GlassBoxImgMobile image={getImage(item.authorImage) || item.authorImage} />
                  {item.authorName}
                </GlassBoxAuthor>
              </GlassBoxContent>
            </GlassBox>
          ))}
        </TestimonyContainer>
      </TestimonyListInnerContainer>
    </TestimonyListContainer>
  )
})
