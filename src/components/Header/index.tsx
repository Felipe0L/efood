import { useDispatch, useSelector } from 'react-redux'
import {
  HeaderContainer,
  LinkRestaurantes,
  CartButton,
  LogoHeader
} from './styles'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { order } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderContainer>
      <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
      <LogoHeader src={logo} alt="EFOOD" />
      <CartButton onClick={openCart}>
        <span>{order.length}</span> produto(s) no carrinho
      </CartButton>
    </HeaderContainer>
  )
}

export default Header
