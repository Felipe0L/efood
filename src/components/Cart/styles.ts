import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

type inputGroupProps = {
  maxwidth?: string
}

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
export const Sidebar = styled.form`
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
export const DeliverDataContainer = styled.div`
  .margin-bottom {
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    margin-top: 8px;
  }
`

export const InputGroup = styled.div<inputGroupProps>`
  max-width: ${(props) => props.maxwidth || 'auto'};

  input {
    display: block;
    width: 100%;
    border: 1px solid transparent;
    padding: 8px;
    margin: 8px 0;
    background-color: ${cores.salmaoClaro};
    font-size: 14px;
    font-weight: bold;

    &.error {
      border: 3px solid red;
    }
  }

  label {
    font-size: 14px;
  }
`
export const InputGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const PaymentDataContainer = styled.div`
  ${ButtonContainer} {
    margin-top: 8px;
  }
`
export const ConfirmationP = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`
