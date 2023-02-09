import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'

import { Form } from './components/Form'
import { CountDown } from './components/Countdown'

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'

import { CycleContext } from '../../contexts/CyclesContext'

interface IForm {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, interruptCycle, createCycle } = useContext(CycleContext)

  const methods = useForm<IForm>({
    defaultValues: { task: '', minutesAmount: 5 },
  })

  const { watch, handleSubmit, reset } = methods

  const handleCreateTask: SubmitHandler<IForm> = (data) => {
    createCycle(data)
    reset()
  }

  const isTaskInputFilled = !watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateTask)}>
        <FormProvider {...methods}>
          <Form />
        </FormProvider>
        <CountDown />
        {!activeCycle ? (
          <StartCountDownButton type="submit" disabled={isTaskInputFilled}>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        ) : (
          <StopCountDownButton type="button" onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
