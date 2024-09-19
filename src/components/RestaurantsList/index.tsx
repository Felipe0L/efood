import Restaurant from '../../Restaurant'
import { RestaurantListContainer } from './styles'
import Res from '../../models/Res'

export type Props = {
  restaurants: Res[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantListContainer>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        name={restaurant.name}
        avaliation={restaurant.avaliation}
        description={restaurant.description}
        image={restaurant.image}
        infos={restaurant.infos}
      />
    ))}
  </RestaurantListContainer>
)

export default RestaurantsList
