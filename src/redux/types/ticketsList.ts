export interface TicketsListState {
  tickets: object[]
  stop: boolean
  loading: boolean
}

export enum TicketsActionTypes {
  SET_TICKETS = 'SET_TICKETS',
}

interface SetTicketsAction {
  type: TicketsActionTypes.SET_TICKETS
  payload: {
    tickets: object[]
    stop: boolean
  }
}

export interface ITicket {
  price: number
  carrier: string
  segments: { origin: string; destination: string; date: string; duration: number; stops: any[] }[]
}

export type TicketsListActions = SetTicketsAction
