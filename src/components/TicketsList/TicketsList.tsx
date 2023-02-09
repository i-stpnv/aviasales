import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../Ticket/Ticket'
import { useActions } from '../../hooks/useActions'
import { AviasalesApi } from '../../services/AviasalesApi'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITicket } from '../../redux/types/ticketsList'

const TicketsList = () => {
  const api = new AviasalesApi()

  const { asyncSetTickets } = useActions()

  useEffect(() => {
    api.getSearchId().then((data) => {
      asyncSetTickets(data.searchId)
    })
  }, [])

  const { tickets, loading } = useTypedSelector((state) => state.tickets)
  const { ticketsOnPage } = useTypedSelector((state) => state.ticketsOnPage)
  const filter = useTypedSelector((state) => state.filter)

  if (filter.mainFilter === 'cheapest') {
    tickets.sort((a: any, b: any) => a.price - b.price)
  }
  if (filter.mainFilter === 'fastest') {
    tickets.sort(
      (a: any, b: any) =>
        a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
  }
  if (filter.mainFilter === 'optimal') {
    tickets.sort(
      (a: any, b: any) =>
        a.segments[0].duration +
        a.segments[1].duration +
        a.price -
        (b.segments[0].duration + b.segments[1].duration + b.price)
    )
  }

  const element = tickets.map((el: ITicket | any) => {
    const transfersNum =
      el.segments[0].stops.length >= el.segments[1].stops.length
        ? el.segments[0].stops.length
        : el.segments[1].stops.length
    if (filter.without && transfersNum === 0) {
      return (
        <li key={uuidv4()}>
          <Ticket price={el.price} carrier={el.carrier} flights={el.segments} />
        </li>
      )
    }

    if (filter.oneTransfer && transfersNum === 1) {
      return (
        <li key={uuidv4()}>
          <Ticket price={el.price} carrier={el.carrier} flights={el.segments} />
        </li>
      )
    }

    if (filter.twoTransfers && transfersNum === 2) {
      return (
        <li key={uuidv4()}>
          <Ticket price={el.price} carrier={el.carrier} flights={el.segments} />
        </li>
      )
    }

    if (filter.threeTransfers && transfersNum === 3) {
      return (
        <li key={uuidv4()}>
          <Ticket price={el.price} carrier={el.carrier} flights={el.segments} />
        </li>
      )
    }

    if (!filter.threeTransfers && !filter.twoTransfers && !filter.oneTransfer && !filter.without && !filter.all) {
      return (
        <li key={uuidv4()}>
          <Ticket price={el.price} carrier={el.carrier} flights={el.segments} />
        </li>
      )
    } else return null
  })

  return loading ? (
    <ul>{element.filter((val: any) => val !== null).slice(0, 6 + ticketsOnPage)}</ul>
  ) : (
    <h1
      style={{
        marginLeft: '80px',
        marginBottom: '20px',
      }}
    >
      Билеты скоро загрузятся
    </h1>
  )
}

export default TicketsList
