import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

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
`
export const ContadorProduto = styled.div`
  margin-bottom: 80px;
  margin-top: 61px;
  margin-right: 169px;
`
export const LogoHeader = styled.img`
  width: 125px;
  height: 57.5px;
  align-items: center;
`
