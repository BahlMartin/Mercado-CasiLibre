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
        <div className="navbar__container">
          <NavBarTop onMenuOpen={() => setIsDrawerOpen(true)} />
          <NavBarSub />
        </div>
      </header>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  )
}
