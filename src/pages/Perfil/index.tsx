import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant as Foods } from '../Home'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'

const Perfil = () => {
  const { id } = useParams()
  const [listOfFoods, setListOfFoods] = useState<Foods>({
    id: 0,
    avaliacao: '',
    capa: '',
    cardapio: [
      {
        descricao: '',
        foto: '',
        id: 0,
        nome: '',
        porcao: '',
        preco: 0
      }
    ],
    descricao: '',
    destacado: false,
    tipo: '',
    titulo: ''
  })
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setListOfFoods(res))
  }, [id])

  if (!listOfFoods) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <div>
        <Header />
        <Banner restaurant={listOfFoods} />
      </div>
      <FoodsList foods={listOfFoods} />
    </>
  )
}

export default Perfil
