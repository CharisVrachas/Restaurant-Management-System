import React from 'react'
import Hero from '../Components/Hero'
import Menu from '../Components/Menu'
import ReservationForm from '../Components/ReservationForm'

const Homepage = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="reservations">
        <ReservationForm />
      </section>
    </div>
  )
}

export default Homepage