import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const FoodsListContainer = styled.section`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px auto 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContentContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  background-color: ${cores.salmao};
  color: ${cores.branco};
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`
export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`
export const FoodImg = styled.img`
  width: 280px;
  height: 280px;
  display: block;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 59px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
  }

  p,
  span {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    margin-top: 10px;
  }

  ${ButtonContainer} {
    width: 218px;
  }
`
export const FoodImgContainer = styled.div`
  margin: 32px 24px;
`
