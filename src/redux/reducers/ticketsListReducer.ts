import { TicketsActionTypes, TicketsListState, TicketsListActions } from '../types/ticketsList'

const initialState: TicketsListState = {
  tickets: [],
  stop: false,
  loading: false,
}

export const ticketsListReducer = (state = initialState, action: TicketsListActions) => {
  switch (action.type) {
    case TicketsActionTypes.SET_TICKETS: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
        loading: true,
      }
    }

    default:
      return state
  }
}
