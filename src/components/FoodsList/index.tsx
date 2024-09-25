import { useState } from 'react'

import { Restaurant as Foods } from '../../pages/Home'
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

export type Props = {
  foods: Foods
}

const FoodsList = ({ foods }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [modalData, setModalData] = useState({
    foto: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: ''
  })
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
                preco: formataPreco(food.preco)
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
            <span>{modalData.porcao}</span>
            <Button
              type="button"
              title={`Adicionar ao carrinho ${modalData.preco}`}
            >
              {`Adicionar ao carrinho ${modalData.preco}`}
            </Button>
          </InfoContainer>
        </ModalContentContainer>
      </Modal>
    </>
  )
}

export default FoodsList
