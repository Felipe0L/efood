import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Order = {
  id: number
  name: string
  image: string
  price: number
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (!restaurant) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <div>
        <Hero />
      </div>
      <RestaurantsList restaurants={restaurant} />
    </>
  )
}

export default Home
