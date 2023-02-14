import { TicketsActionTypes, TicketsListState, TicketsListActions } from '../types/ticketsList'

const initialState: TicketsListState = {
  tickets: [],
  stop: false,
  loading: true,
}

export const ticketsListReducer = (state = initialState, action: TicketsListActions) => {
  switch (action.type) {
    case TicketsActionTypes.SET_TICKETS: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets.sort((a: any, b: any) => a.price - b.price)],
        stop: action.payload.stop,
        loading: false,
      }
    }

    default:
      return state
  }
}
