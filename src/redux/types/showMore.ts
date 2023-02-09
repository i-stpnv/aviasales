export enum ShowMoreActions {
  SHOW_MORE = 'SHOW_MORE',
}

export interface IShowMoreState {
  ticketsOnPage: number
}

export interface IShowMoreAction {
  type: ShowMoreActions.SHOW_MORE
}

export type TShowMoreAction = IShowMoreAction
