import star from '../../assets/images/estrela.png'
import { AvaliationNote, ImgStar, AvaliationContainer } from './styles'

type Props = {
  children: string
}

const Avaliation = ({ children }: Props) => (
  <AvaliationContainer>
    <AvaliationNote>{children}</AvaliationNote>
    <ImgStar src={star} alt="Estrela" />
  </AvaliationContainer>
)

export default Avaliation
