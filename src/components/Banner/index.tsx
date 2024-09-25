import { BannerContainer, TituloBanner, TipoRestaurante } from './styles'
import { Restaurant } from '../../pages/Home'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <TipoRestaurante>{restaurant.tipo}</TipoRestaurante>
    <TituloBanner>{restaurant.titulo}</TituloBanner>
  </BannerContainer>
)

export default Banner
