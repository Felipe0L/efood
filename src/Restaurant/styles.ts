import styled from 'styled-components'
import { TagContainer } from '../components/Tag/styles'
import { cores } from '../styles'
import { ButtonLink } from '../components/Button/styles'

export const RestaurantContainer = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.salmao};
  background-color: ${cores.branco};


  ${TagContainer} {
    margin-left: 8px;
  }

  ${ButtonLink} {
    margin-left: 8px;
    margin-bottom: 8px;
  }
}
`
export const RestaurantName = styled.h3`
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: bold;
`
export const RestaurantDescription = styled.p`
  color: ${cores.salmao};
  font-size: 14px;
  line-height: 22px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 16px 8px;
`
