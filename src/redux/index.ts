import { combineReducers } from 'redux'

import { filterReducer } from './reducers/filterReducer'
import { ticketsListReducer } from './reducers/ticketsListReducer'
import { showMoreReducer } from './reducers/showMoreReducer'

export const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsListReducer,
  ticketsOnPage: showMoreReducer,
})

export type RootState = ReturnType<typeof rootReducer>
