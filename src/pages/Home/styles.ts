import styled from '@emotion/styled'

export const HomeContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled('input')`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray[400]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.colors.gray[100]};

  &:focus,
  &:focus-visible {
    box-shadow: none;
    outline: none;
    border-color: ${(props) => props.theme.colors.green[500]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[500]};
  }
`

export const TextInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled('div')`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  font-weight: bold;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme.colors.gray[500]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled('div')`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors.green[500]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountDownButton = styled('button')`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme.colors.green[500]};
  color: ${(props) => props.theme.colors.gray[100]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.green[700]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
