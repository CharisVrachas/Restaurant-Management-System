import React from 'react'

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='flex justify-between p-8 bg-black text-white fixed w-full z-30'>
      <h2 className='font-bold text-2xl cursor-pointer' onClick={() => scrollToSection('hero')}>RESTAURANT</h2>
      <ul className='flex gap-8'>
        <li className='cursor-pointer hover:text-amber-400' onClick={() => scrollToSection('home')}>HOME</li>
        <li className='cursor-pointer hover:text-amber-400' onClick={() => scrollToSection('reservations')}>RESERVATIONS</li>
        <li className='cursor-pointer hover:text-amber-400' onClick={() => scrollToSection('menu')}>MENU</li>
      </ul>
    </nav>
  )
}

export default Navbar