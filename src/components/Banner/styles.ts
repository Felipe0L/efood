import styled from 'styled-components'
import banner from '../../assets/images/banner.png'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  max-width: 1366px;
  width: 100%;
  height: 280px;
  margin: 0 auto;
  font-size: 32px;
  color: ${cores.branco};
`
export const TituloBanner = styled.h2`
  font-weight: bolder;
  line-height: 38px;
  margin-top: 156.5px;
  margin-bottom: 32px;
  margin-left: 170px;
`
export const TipoRestaurante = styled.h3`
  font-weight: 100;
  line-height: 38px;
  padding-top: 24px;
  margin-left: 170px;
`
