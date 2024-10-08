import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding: 4px 0;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  border: none;
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding: 4px 6px;
  background-color: ${cores.salmao};
  color: ${cores.salmaoClaro};
  text-decoration: none;
`
