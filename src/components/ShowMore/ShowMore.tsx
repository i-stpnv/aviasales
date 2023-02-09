import React from 'react'

import './ShowMore.scss'
import { useActions } from '../../hooks/useActions'

const ShowMore = () => {
  const { showMoreTickets } = useActions()

  return (
    <>
      <button onClick={() => showMoreTickets()} className="show-more-btn">
        Показать еще 5 билетов!
      </button>
    </>
  )
}

export default ShowMore
