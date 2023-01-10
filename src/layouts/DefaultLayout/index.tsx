import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MainContainer } from './styles'

export function DefaultLayout() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  )
}
