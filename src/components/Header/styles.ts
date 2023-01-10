import styled from '@emotion/styled'

export const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme.colors.gray[100]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.colors.green[500]};
      }

      &.active {
        color: ${(props) => props.theme.colors.green[500]};
      }
    }
  }
`
