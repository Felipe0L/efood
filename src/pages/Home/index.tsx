import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'
import Res from '../../models/Res'

import sushi from '../../assets/images/comida1.png'
import pasta from '../../assets/images/comida2.png'

const listaDeRestaurantes: Res[] = [
  {
    id: 1,
    name: 'Hioki sushi',
    avaliation: '4.9',
    image: sushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    avaliation: '4.6',
    image: pasta,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    avaliation: '4.6',
    image: pasta,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    avaliation: '4.6',
    image: pasta,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    avaliation: '4.6',
    image: pasta,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    avaliation: '4.6',
    image: pasta,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <div>
      <Hero />
    </div>
    <RestaurantsList restaurants={listaDeRestaurantes} />
  </>
)

export default Home
