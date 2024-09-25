import Avaliation from '../components/Avaliation'
import Tag from '../components/Tag'

import {
  RestaurantContainer,
  RestaurantDescription,
  RestaurantName,
  Infos,
  Container,
  RestaurantImg
} from './styles'
import Button from '../components/Button'

type Props = {
  name: string
  avaliation: string
  image: string
  infos: string
  description: string
  destacado?: boolean
  id: number
}

const Restaurant = ({
  name,
  avaliation,
  image,
  infos,
  description,
  destacado,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }
  return (
    <RestaurantContainer>
      <RestaurantImg src={image} alt={name} />
      <Infos>
        {destacado && <Tag>Destaque do dia</Tag>}
        <Tag key={id}>{infos}</Tag>
      </Infos>
      <Container>
        <RestaurantName>{name}</RestaurantName>
        <Avaliation>{avaliation}</Avaliation>
      </Container>
      <RestaurantDescription>{getDescricao(description)}</RestaurantDescription>
      <Button type="link" title="Saiba mais" to={`perfil/${id}`}>
        Saiba mais
      </Button>
    </RestaurantContainer>
  )
}

export default Restaurant
