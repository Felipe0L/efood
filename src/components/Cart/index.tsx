import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  PricesContainer,
  CartItem
} from './styles'
import { formataPreco } from '../FoodsList'

const Cart = () => {
  const { isOpen, order } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeOrder = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return order.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {order.map((pedido) => (
            <CartItem key={pedido.id}>
              <img src={pedido.image} />
              <div>
                <h3>{pedido.name}</h3>
                <Prices>{formataPreco(pedido.price)}</Prices>
              </div>
              <button type="button" onClick={() => removeOrder(pedido.id)} />
            </CartItem>
          ))}
        </ul>
        <PricesContainer>
          <Prices>Valor total </Prices>
          <Prices>{formataPreco(getTotalPrice())}</Prices>
        </PricesContainer>
        <Button type="button" title="Clique aqui para continuar a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
