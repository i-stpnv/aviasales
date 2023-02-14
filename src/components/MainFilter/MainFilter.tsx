import React, { useState } from 'react'

import './MainFilter.scss'
import { useActions } from '../../hooks/useActions'

const MainFilter = () => {
  const [filterCheapest, setFilterCheapest] = useState(true)
  const [filterFastest, setFilterFastest] = useState(false)
  const [filterOptimal, setFilterOptimal] = useState(false)

  const { setFilter } = useActions()

  const handler = (e: any) => {
    setFilter(e.target.dataset.name)
    if (e.target.dataset.name === 'cheapest') {
      setFilterCheapest(true)
    } else {
      setFilterCheapest(false)
    }

    if (e.target.dataset.name === 'fastest') {
      setFilterFastest(true)
    } else {
      setFilterFastest(false)
    }

    if (e.target.dataset.name === 'optimal') {
      setFilterOptimal(true)
    } else {
      setFilterOptimal(false)
    }
  }

  return (
    <nav className="main-filter">
      <ul className="main-filter__list">
        <li
          data-name="cheapest"
          onClick={(e) => handler(e)}
          className={`main-filter__item ${filterCheapest ? 'active' : ''}`}
        >
          Самый дешевый
        </li>
        <li
          data-name="fastest"
          onClick={(e) => handler(e)}
          className={`main-filter__item ${filterFastest ? 'active' : ''}`}
        >
          Самый быстрый
        </li>
        <li
          data-name="optimal"
          onClick={(e) => handler(e)}
          className={`main-filter__item ${filterOptimal ? 'active' : ''}`}
        >
          Оптимальный
        </li>
      </ul>
    </nav>
  )
}

export default MainFilter
