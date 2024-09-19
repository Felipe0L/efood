import Button from '../Button'
import { FoodContainer, FoodDescription, FoodImg, FoodTitle } from './styles'

type Props = {
  title: string
  image: string
  description: string
}

const Food = ({ title, image, description }: Props) => (
  <FoodContainer>
    <FoodImg src={image} alt="Pizza" />
    <FoodTitle>{title}</FoodTitle>
    <FoodDescription>{description}</FoodDescription>
    <Button type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </FoodContainer>
)
export default Food
