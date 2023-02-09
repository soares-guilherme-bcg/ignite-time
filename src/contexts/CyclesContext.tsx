import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { cyclesReducer, ICycle } from '../reducers/cycles/reducer'

interface INewCycle {
  task: string
  minutesAmount: number
}

interface ICyclesContext {
  cycles: ICycle[]
  activeCycle?: ICycle
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (amount: number) => void
  createCycle: (newCycle: INewCycle) => void
  interruptCycle: () => void
}

interface ICycleContextProviderProps {
  children: ReactNode
}

export const CycleContext = createContext({} as ICyclesContext)

export function CycleContextProvider({ children }: ICycleContextProviderProps) {
  const [{ cycles, activeCycleId }, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const setSecondsPassed = (amount: number) => {
    setAmountSecondsPassed(amount)
  }

  const createCycle = (data: INewCycle) => {
    const newCycle: ICycle = {
      id: String(new Date().getTime()),
      startDate: new Date(),
      status: 'in_progress',
      ...data,
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  const interruptCycle = () => {
    dispatch(interruptCurrentCycleAction())
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        interruptCycle,
        createCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
