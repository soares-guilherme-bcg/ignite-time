import styled from '@emotion/styled'

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
  border-bottom: 2px solid ${(props) => props.theme.colors['gray-400']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.colors['gray-100']};

  &:focus,
  &:focus-visible {
    box-shadow: none;
    outline: none;
    border-color: ${(props) => props.theme.colors['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['gray-500']};
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
