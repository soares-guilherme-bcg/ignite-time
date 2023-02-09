import produce from 'immer'

import { ActionTypes } from './actions'

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
  status: 'done' | 'in_progress' | 'stopped'
}

export interface ICycleState {
  cycles: ICycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: ICycleState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId,
        )

        if (index >= 0) {
          draft.cycles[index].finishedDate = new Date()
          draft.cycles[index].status = 'done'
        }
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId,
        )

        if (index >= 0) {
          draft.cycles[index].interruptedDate = new Date()
          draft.cycles[index].status = 'stopped'

          draft.activeCycleId = null
        }
      })

    default:
      return state
  }
}
