import React from 'react'
import './Flight.scss'
import { add, parseISO } from 'date-fns'

const Flight = (props: any) => {
  const { from, to, date, travelTime, stops } = props

  const timeOfDeparture: string = parseISO(date).toString().slice(16, 21)
  const arrivalTime = add(parseISO(date), { minutes: travelTime }).toString().slice(16, 21)

  return (
    <div className="flight">
      <div className="flight__from-to flight__item">
        <h4>
          {from} – {to}
        </h4>
        <span>
          {timeOfDeparture} – {arrivalTime}
        </span>
      </div>

      <div className="flight__travel-time flight__item">
        <h4>В ПУТИ</h4>
        <span>
          {Math.floor(travelTime / 60)}ч {travelTime % 60}м
        </span>
      </div>
      <div className="flight__transfers flight__item">
        <h4>
          {stops.length} {stops.length === 0 ? 'ПЕРЕСАДОК' : stops.length === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}
        </h4>
        <span>{stops.join(', ')}</span>
      </div>
    </div>
  )
}

export default Flight
