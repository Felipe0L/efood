import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebooklogo.svg'
import instagram from '../../assets/images/instagramlogo.svg'
import twitter from '../../assets/images/twitterlogo.svg'
import {
  FooterContainer,
  SocialsList,
  FooterText,
  SocialsListItem
} from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="EFOOD" />
    <SocialsList>
      <SocialsListItem>
        <img src={instagram} alt="Logo do Instagram" />
      </SocialsListItem>
      <SocialsListItem>
        <img src={facebook} alt="Logo do Facebook" />
      </SocialsListItem>
      <SocialsListItem>
        <img src={twitter} alt="Logo do Twitter" />
      </SocialsListItem>
    </SocialsList>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)

export default Footer
