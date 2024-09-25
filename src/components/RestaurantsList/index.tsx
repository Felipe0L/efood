import Restaurant from '../../Restaurant'
import { RestaurantListContainer } from './styles'
import { Restaurant as Res } from '../../pages/Home/index'

export type Props = {
  restaurants: Res[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantListContainer>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        name={restaurant.titulo}
        avaliation={restaurant.avaliacao}
        description={restaurant.descricao}
        image={restaurant.capa}
        infos={restaurant.tipo}
        destacado={restaurant.destacado}
        id={restaurant.id}
      />
    ))}
  </RestaurantListContainer>
)

export default RestaurantsList
