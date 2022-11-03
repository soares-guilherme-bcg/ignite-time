import styled from '@emotion/styled'

export const ButtonContainer = styled('button')`
  background-color: ${(props) => props.theme.colors.green[500]};
  border: 0;
  height: 2rem;
  color: ${(props) => props.theme.colors.white};
  margin-top: 0.5rem;
  cursor: pointer;
`
