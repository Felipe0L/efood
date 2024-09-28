import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 70%;
  }
`
export const PricesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`
export const Prices = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.salmaoClaro};
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.salmaoClaro};
  padding: 8px 0 12px 8px;
  position: relative;
  margin-top: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border: none;
    background-color: transparent;
  }

  ${Prices} {
    color: ${cores.salmao};
  }
  div {
    padding-left: 8px;
  }
`
