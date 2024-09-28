import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  height: 162px;
  width: 100%;
  margin: 0 auto;
  background-image: url(${fundo});
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bolder;
  align-items: center;
`
export const LinkRestaurantes = styled(Link)`
  margin-left: 168px;
  margin-bottom: 80px;
  margin-top: 61px;
  height: 21px;
  text-decoration: none;
  color: ${cores.salmao};

  @media (max-width: ${breakpoints.tablet}) {
    margin: auto 0 auto 102px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 16px;
    font-size: 14px;
  }
`
export const CartButton = styled.div`
  margin-bottom: 80px;
  margin-top: 61px;
  margin-right: 169px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin: auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 6px;
    font-size: 14px;
  }
`

export const LogoHeader = styled.img`
  width: 125px;
  height: 57.5px;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 126px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 40px;
    width: 20%;
  }
`
