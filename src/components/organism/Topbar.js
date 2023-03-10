import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { screen } from '../../utils/screen'
import { FcMenu } from 'react-icons/fc'

const TopbarContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  z-index: 10000;
  transition: all 0.2s ease-in-out;

  & .black-logo {
    display: none;
  }

  @media screen and (max-width: ${screen.mobile}) {
    & {
      background-color: ${color.white};
      box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.2);

      & .white-logo {
        display: none;
      }

      & .black-logo {
        display: inline;
      }

      @keyframes scale-in-ver-top {
        0% {
          transform: scaleY(0);
          transform-origin: 100% 0%;
          opacity: 1;
        }
        100% {
          transform: scaleY(1);
          transform-origin: 100% 0%;
          opacity: 1;
        }
      }
    }
  }

  &.sticky {
    background-color: ${color.white};
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.2);

    & .white-logo {
      display: none;
    }

    & .black-logo {
      display: inline;
    }
  }
`

const LogoContainer = styled.div`
  & > img {
    height: 50px;
  }
`

const MenuContainer = styled.ul`
  display: flex;
  cursor: pointer;

  & > li {
    margin: 0 15px;
  }

  @media screen and (max-width: ${screen.mobile}) {
    display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
    position: fixed;
    top: 83px;
    left: 0;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.9);
    color: ${color.white};
    height: 100vh;
    animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    & > li {
      padding: 60px 0;
      border-top: 1px solid ${color.white};
      width: 80vw;
      text-align: center;
    }
  }
`

const HumburgerContainer = styled.div`
  font-size: 40px;
  color: ${color.black};

  @media screen and (min-width: ${screen.mobile}) {
    display: none;
  }
`

export const Topbar = ({
  jumbotronRef,
  featureRef,
  strongPointRef,
  productRef,
  supportRef,
}) => {
  const [isShowing, setIsShowing] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header')
      header?.classList.toggle(
        'sticky',
        window.scrollY > window.screen.height - 100
      )
    })
  }, [])

  const handleClick = React.useCallback((ref) => {
    setIsShowing(false)
    ref?.current?.scrollIntoView()
  }, [])

  return (
    <TopbarContainer>
      <LogoContainer>
        <img
          src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/topbar/logo_megane_white.png"
          alt="Megane Logo"
          className="white-logo"
        />
        <img
          src="https://megane-lp-data-bucket.s3.ap-northeast-1.amazonaws.com/topbar/logo_megane_black_text.png"
          alt="Megane Logo"
          className="black-logo"
        />
      </LogoContainer>
      <HumburgerContainer>
        <FcMenu onClick={() => setIsShowing(!isShowing)} />
      </HumburgerContainer>
      <MenuContainer isShowing={isShowing}>
        <li onClick={() => handleClick(jumbotronRef)}>Home</li>
        <li onClick={() => handleClick(featureRef)}>Tentang Megane</li>
        <li onClick={() => handleClick(strongPointRef)}>Garansi</li>
        <li onClick={() => handleClick(productRef)}>Produk Kami</li>
        <li onClick={() => handleClick(supportRef)}>Layanan Pelanggan</li>
      </MenuContainer>
    </TopbarContainer>
  )
}
