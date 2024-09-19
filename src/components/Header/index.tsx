import {
  HeaderContainer,
  LinkRestaurantes,
  ContadorProduto,
  LogoHeader
} from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderContainer>
    <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
    <LogoHeader src={logo} alt="EFOOD" />
    <ContadorProduto>
      <span>0</span> produto(s) no carrinho
    </ContadorProduto>
  </HeaderContainer>
)

export default Header
