import { FilterActions, FilterActionsType, IFilterState } from '../types/filter'

const initialState: IFilterState = {
  all: false,
  without: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
  mainFilter: '',
}

export const filterReducer = (state = initialState, action: FilterActions): IFilterState => {
  switch (action.type) {
    case FilterActionsType.TOGGLE: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
      }
    }
    case FilterActionsType.FILTER_BY_PRICE: {
      if (action.payload === state.mainFilter) {
        return {
          ...state,
          mainFilter: '',
        }
      }
      return {
        ...state,
        mainFilter: action.payload,
      }
    }
    case FilterActionsType.TOGGLE_ALL_STATE: {
      return {
        ...state,
        all: !state.all,
        without: !state.all,
        oneTransfer: !state.all,
        twoTransfers: !state.all,
        threeTransfers: !state.all,
      }
    }

    default:
      return state
  }
}
