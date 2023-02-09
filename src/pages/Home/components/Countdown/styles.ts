import styled from '@emotion/styled'

export const CountdownContainer = styled('div')`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  font-weight: bold;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme.colors['gray-500']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled('div')`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
