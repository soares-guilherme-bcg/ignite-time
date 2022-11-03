import { css } from '@emotion/react'

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #fff;
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
