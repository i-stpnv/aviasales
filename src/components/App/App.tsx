import React from 'react'

import './App.scss'
import Logo from '../Logo/Logo'
import MainFilter from '../MainFilter/MainFilter'
import ShowMore from '../ShowMore/ShowMore'
import TicketsList from '../TicketsList/TicketsList'
import TransfersFilter from '../TransfersFilter/TransfersFilter'

const App: React.FC = () => {
  return (
    <>
      <Logo />
      <div className="content-wrapper">
        <TransfersFilter />
        <div>
          <MainFilter />
          <TicketsList />
          <ShowMore />
        </div>
      </div>
    </>
  )
}

export default App
