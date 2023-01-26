import { css } from '@emotion/react'
import { defaultTheme } from './default'

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${defaultTheme.colors['gray-800']};
    color: ${defaultTheme.colors['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
