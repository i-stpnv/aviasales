// eslint-disable-next-line import/named
import { Dispatch } from 'redux'

import { TicketsActionTypes, TicketsListActions } from '../types/ticketsList'

export const requestTickets = (dispatch: Dispatch<TicketsListActions>, id: string): void => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((tickets) => tickets.json())
    .then((tickets) => {
      dispatch({
        type: TicketsActionTypes.SET_TICKETS,
        payload: tickets,
      })
      if (tickets.stop) {
        return
      }
      requestTickets(dispatch, id)
    })
    .catch(() => requestTickets(dispatch, id))
}

export const asyncSetTickets = (id: string) => {
  return (dispatch: Dispatch<TicketsListActions>) => {
    requestTickets(dispatch, id)
  }
}
