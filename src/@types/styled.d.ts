import '@emotion/react'
import { defaultTheme } from '../themes/default'

type DefaultTheme = typeof defaultTheme

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
