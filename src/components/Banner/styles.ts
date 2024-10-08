import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 8px;
    margin-top: 100px;
  }
`
export const TipoRestaurante = styled.h3`
  font-weight: 100;
  line-height: 38px;
  padding-top: 24px;
  margin-left: 170px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 8px;
  }
`
