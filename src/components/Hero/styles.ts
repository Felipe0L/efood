import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeroContainer = styled.header`
  background-image: url(${fundo});
  background-color: ${cores.salmaoClaro};
  height: 384px;
  width: 100%;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 40px;
`
export const ImgLogo = styled.img`
  display: flex;
  margin: 0 auto;
`
export const HeroTitle = styled.h2`
  font-size: 36px;
  line-height: 42px;
  font-weight: bolder;
  text-align: center;
  margin-top: 136px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 80px;
  }
`
