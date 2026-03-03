import React from 'react'
import { useNavigate, Link } from 'react-router'
import './NavBar.css'
import SearchBar from '../SearchBar/SearchBar'
import { FiMapPin } from "react-icons/fi";
import NavBarTop from './NavBarTop/NavBarTop';
import NavBarSub from './NavBarSub/NavBarSub';

export default function NavBar() {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/search/${category}`)
  }
  return (
    <header className="navbar">
      <NavBarTop />
      <NavBarSub />
    </header>
  )
}
