import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import { useGetFoodsMenuQuery } from '../../services/api'
import Cart from '../../components/Cart'
import { Order } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const { data: listOfFoods } = useGetFoodsMenuQuery(id!)
  const order: Order = {
    id: 0,
    image: '',
    name: '',
    price: 0
  }

  if (!listOfFoods) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header />
      <Banner restaurant={listOfFoods} />
      <FoodsList order={order} foods={listOfFoods} />
      <Cart />
    </>
  )
}

export default Perfil
