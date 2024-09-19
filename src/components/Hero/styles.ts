import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeroContainer = styled.header`
  background-image: url(${fundo});
  background-color: ${cores.salmaoClaro};
  height: 384px;
  max-width: 1366px;
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
`
