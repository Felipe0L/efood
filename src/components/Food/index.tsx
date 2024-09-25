import Button from '../Button'
import { FoodContainer, FoodDescription, FoodImg, FoodTitle } from './styles'

type Props = {
  title: string
  image: string
  description: string
  onClick?: () => void
}

const Food = ({ title, image, description, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }
  return (
    <FoodContainer>
      <FoodImg src={image} alt="Pizza" />
      <FoodTitle>{title}</FoodTitle>
      <FoodDescription>{getDescricao(description)}</FoodDescription>
      <Button type="button" title="Adicionar ao carrinho" onClick={onClick}>
        Adicionar ao carrinho
      </Button>
    </FoodContainer>
  )
}
export default Food
