import React from 'react'

import './TransfersFilter.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IFilterState } from '../../redux/types/filter'

const TransfersFilter = () => {
  const { toggleInput, allStateHandler } = useActions()
  const filterState = useTypedSelector((state) => state.filter)

  let countFalse = 0
  for (const key in filterState) {
    const value = key as keyof IFilterState
    if (value !== 'mainFilter') {
      if (!filterState[value]) {
        countFalse += 1
      }
    }
  }

  if (filterState.all && countFalse === 1) {
    toggleInput('all')
  }
  if (!filterState.all && countFalse === 1) {
    toggleInput('all')
  }

  const handler = (e: any): void => {
    if (e.target.name === 'all') {
      allStateHandler()
    } else {
      toggleInput(e.target.name)
    }
  }

  return (
    <div className="transfers-filter">
      <h3>Количество пересадок</h3>
      <form className="transfers-filter__form" action="">
        <div>
          <input checked={filterState.all} id="all" name="all" type="checkbox" onChange={(e) => handler(e)} />
          <label htmlFor="all">Все</label>
        </div>
        <div>
          <input
            checked={filterState.without}
            id="without"
            name="without"
            type="checkbox"
            onChange={(e) => handler(e)}
          />
          <label htmlFor="without">Без пересадок</label>
        </div>
        <div>
          <input
            checked={filterState.oneTransfer}
            id="oneTransfer"
            name="oneTransfer"
            type="checkbox"
            onChange={(e) => handler(e)}
          />
          <label htmlFor="oneTransfer">1 пересадка</label>
        </div>
        <div>
          <input
            checked={filterState.twoTransfers}
            id="twoTransfers"
            name="twoTransfers"
            type="checkbox"
            onChange={(e) => handler(e)}
          />
          <label htmlFor="twoTransfers">2 пересадки</label>
        </div>
        <div>
          <input
            checked={filterState.threeTransfers}
            id="threeTransfers"
            name="threeTransfers"
            type="checkbox"
            onChange={(e) => handler(e)}
          />
          <label htmlFor="threeTransfers">3 пересадки</label>
        </div>
      </form>
    </div>
  )
}

export default TransfersFilter
