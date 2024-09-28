import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { RestaurantContainer } from '../../Restaurant/styles'
import { ButtonLink } from '../Button/styles'

export const RestaurantListContainer = styled.section`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 0 auto;
  margin-bottom: 120px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    position: relative;

    ${RestaurantContainer} {
      height: 480px;
    }

    ${ButtonLink} {
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
