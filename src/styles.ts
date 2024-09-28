import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  salmaoClaro: '#FFEBD9',
  branco: '#FFFFFF',
  brancoOpaco: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '769px',
  mobile: '376px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.brancoOpaco};
    color: ${cores.salmao}
  }


`
