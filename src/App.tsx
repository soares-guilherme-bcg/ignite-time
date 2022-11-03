import { Global, ThemeProvider } from '@emotion/react'
import { Button } from './components/Button/Button'
import { defaultTheme } from './themes/default'
import { globalStyle } from './themes/global'



export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyle} />
      <div>Hello World</div>
      <Button />
    </ThemeProvider>
  )
}


