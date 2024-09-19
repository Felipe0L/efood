import Foods from '../../models/Foods'
import Food from '../Food'
import { FoodsListContainer } from './styles'

export type Props = {
  foods: Foods[]
}

const FoodsList = ({ foods }: Props) => (
  <FoodsListContainer>
    {foods.map((food) => (
      <Food
        description={food.description}
        image={food.image}
        title={food.title}
        key={food.id}
      />
    ))}
  </FoodsListContainer>
)

export default FoodsList
