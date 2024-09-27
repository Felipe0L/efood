import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Restaurant as Foods, Order } from '../../pages/Home'
import Food from '../Food'
import {
  FoodsListContainer,
  Modal,
  ModalContentContainer,
  CloseButton,
  FoodImg,
  InfoContainer,
  FoodImgContainer
} from './styles'

import close from '../../assets/images/close.png'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'

export type Props = {
  foods: Foods
  order: Order
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const FoodsList = ({ foods, order }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [modalData, setModalData] = useState({
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0,
    id: 0
  })

  const dispatch = useDispatch()
  const addToCart = () => {
    order = {
      id: modalData.id,
      image: modalData.foto,
      name: modalData.nome,
      price: modalData.preco
    }

    dispatch(add(order))
    setModalEstaAberta(false)
    dispatch(open())
  }
  return (
    <>
      <FoodsListContainer>
        {foods.cardapio.map((food) => (
          <Food
            onClick={() => {
              setModalEstaAberta(true)
              setModalData({
                foto: food.foto,
                descricao: food.descricao,
                nome: food.nome,
                porcao: food.porcao,
                preco: food.preco,
                id: food.id
              })
            }}
            description={food.descricao}
            image={food.foto}
            title={food.nome}
            key={food.id}
          />
        ))}
      </FoodsListContainer>
      <Modal className={modalEstaAberta ? 'visible' : ''}>
        <ModalContentContainer>
          <FoodImgContainer>
            <FoodImg src={modalData.foto} />
          </FoodImgContainer>
          <CloseButton src={close} onClick={() => setModalEstaAberta(false)} />
          <InfoContainer>
            <h3>{modalData.nome}</h3>
            <p>{modalData.descricao}</p>
            <span>Serve de {modalData.porcao}</span>
            <Button
              onClick={addToCart}
              type="button"
              title={`Adicionar ao carrinho ${formataPreco(modalData.preco)}`}
            >
              {`Adicionar ao carrinho ${formataPreco(modalData.preco)}`}
            </Button>
          </InfoContainer>
        </ModalContentContainer>
        <div
          onClick={() => setModalEstaAberta(false)}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default FoodsList
