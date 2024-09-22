'use client'

import React, { useState, useEffect } from 'react'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedState = sessionStorage.getItem('menuIsOpen')
    if (storedState !== null) {
      setIsOpen(storedState === 'true')
    }
  }, [])

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    sessionStorage.setItem('menuIsOpen', newState.toString())
  }

  return (
    <div className="fixed top-4 right-4">
      <button
        className="flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
        onClick={toggleMenu}
      >
        <div
          className={`h-0.5 w-5 bg-gray-800 mb-1 transform transition ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <div
          className={`h-0.5 w-5 bg-gray-800 mb-1 transition ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <div
          className={`h-0.5 w-5 bg-gray-800 transform transition ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>
    </div>
  )
}

export default BurgerMenu
