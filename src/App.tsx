import { Global, ThemeProvider } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { defaultTheme } from './themes/default'
import { globalStyle } from './themes/global'
import { CycleContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <RouterProvider router={router} />
        <Global styles={globalStyle} />
      </CycleContextProvider>
    </ThemeProvider>
  )
}
