import { IShowMoreState, ShowMoreActions, TShowMoreAction } from '../types/showMore'

const initialState: IShowMoreState = {
  ticketsOnPage: 0,
}

export const showMoreReducer = (state = initialState, action: TShowMoreAction) => {
  switch (action.type) {
    case ShowMoreActions.SHOW_MORE: {
      return {
        ticketsOnPage: state.ticketsOnPage + 5,
      }
    }

    default:
      return state
  }
}
