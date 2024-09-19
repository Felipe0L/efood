import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const FoodContainer = styled.div`
  max-width: 320px;
  width: 100%;
  height: 338px;
  background-color: ${cores.salmao};
  color: ${cores.salmaoClaro};

  ${ButtonContainer} {
    max-width: 304px;
    width: 100%;
    margin: 8px;
  }
`
export const FoodImg = styled.img`
  margin: 8px;
`
export const FoodTitle = styled.h3`
  margin-left: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bolder;
  line-height: 18px;
`
export const FoodDescription = styled.p`
  margin: 0 8px;
  font-size: 14px;
  line-height: 21px;
`
