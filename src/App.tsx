import { Global, ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { defaultTheme } from './themes/default'
import { globalStyle } from './themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </ThemeProvider>
  )
}
