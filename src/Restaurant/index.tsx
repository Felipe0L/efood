import Avaliation from '../components/Avaliation'
import Tag from '../components/Tag'

import {
  RestaurantContainer,
  RestaurantDescription,
  RestaurantName,
  Infos,
  Container
} from './styles'
import Button from '../components/Button'

type Props = {
  name: string
  avaliation: string
  image: string
  infos: string[]
  description: string
}

const Restaurant = ({ name, avaliation, image, infos, description }: Props) => (
  <RestaurantContainer>
    <img src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <RestaurantName>{name}</RestaurantName>
      <Avaliation>{avaliation}</Avaliation>
    </Container>
    <RestaurantDescription>{description}</RestaurantDescription>
    <Button type="link" title="Saiba mais" to="/perfil">
      Saiba mais
    </Button>
  </RestaurantContainer>
)

export default Restaurant
