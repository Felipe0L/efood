import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1366px;
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
