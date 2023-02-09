import { FilterActionsType } from '../types/filter'

export const toggleInput = (name: string) => {
  return {
    type: FilterActionsType.TOGGLE,
    payload: name,
  }
}

export const allStateHandler = () => {
  return {
    type: FilterActionsType.TOGGLE_ALL_STATE,
  }
}

export const setFilter = (name: string) => {
  return {
    type: FilterActionsType.FILTER_BY_PRICE,
    payload: name,
  }
}
