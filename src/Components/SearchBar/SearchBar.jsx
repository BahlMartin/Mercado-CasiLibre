import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router';
import './SearchBar.css'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search/${query.trim()}`)
      setQuery('')
    }
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Buscar productos, marcas y mas...'
          aria-label="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' className="search__button" aria-label="Buscar botón">
          <CiSearch size={21} />
        </button>
      </form>
    </div>
  )
}
