import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'
import { StrongPointList } from '../atom/StrongPointList'

const StrongPointContainer = styled.div`
  width: 100vw;
  position: relative;
`
const StrongPointInnerContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OverviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const OverviewDescContainer = styled.div`
  max-width: 800px;
  color: ${color.black};
  line-height: 2.1;
  font-size: ${fontsize.normal};
  margin-bottom: 30px;

  & > h3 {
    display: inline-block;
    font-size: ${fontsize.h2};
    font-weight: 600;
    line-height: 1.6;
  }
`


export const StrongPoint = React.forwardRef((
  props,
  ref
) => {
  const {
    heading,
    subheading,
    items
  } = props

  return (
    <StrongPointContainer ref={ref}>
      <StrongPointInnerContainer>
        <OverviewContainer>
          <OverviewDescContainer>
            <h3 className="section-title">{heading}</h3>
            <div>
              {subheading}
            </div>
          </OverviewDescContainer>
        </OverviewContainer>
        {items.map((item, i) => (
          <StrongPointList
            key={i}
            title={item.title}
            desc={<div>{item.description}</div>}
            imgLink={item.image}
            number={`0${i + 1}`}
          />
        ))}
      </StrongPointInnerContainer>
    </StrongPointContainer>
  )
})
