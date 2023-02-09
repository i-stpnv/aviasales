import React from 'react'

import './Ticket.scss'
import Flight from '../Flight/Flight'

const Ticket = (props: any) => {
  const { price, carrier, flights } = props
  const imgUrl = `https://pics.avs.io/99/36/${carrier}.png`

  return (
    <div className="ticket">
      <header className="ticket__header">
        <span className="ticket__price"> {price} ₽</span>
        <img src={imgUrl} alt="Carrier" />
      </header>
      <Flight
        key={1}
        from={flights[0].origin}
        to={flights[0].destination}
        date={flights[0].date}
        travelTime={flights[0].duration}
        stops={flights[0].stops}
      />
      <Flight
        key={2}
        from={flights[1].origin}
        to={flights[1].destination}
        date={flights[1].date}
        travelTime={flights[1].duration}
        stops={flights[1].stops}
      />
    </div>
  )
}

export default Ticket
