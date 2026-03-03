import React, { useState } from 'react'
import './NavBar.css'
import NavBarTop from './NavBarTop/NavBarTop'
import NavBarSub from './NavBarSub/NavBarSub'
import MobileDrawer from './MobileDrawer/MobileDrawer'

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <NavBarTop onMenuOpen={() => setIsDrawerOpen(true)} />
        <NavBarSub />
      </header>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  )
}
