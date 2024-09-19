import { HeroContainer, HeroTitle, ImgLogo } from './styles'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroContainer>
    <ImgLogo src={logo} alt="EFOOD" />
    <HeroTitle>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </HeroTitle>
  </HeroContainer>
)

export default Hero
