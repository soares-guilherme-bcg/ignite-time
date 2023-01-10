import styled from '@emotion/styled'

export const MainContainer = styled('div')`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
