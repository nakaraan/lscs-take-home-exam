import React, { useState, useEffect } from 'react'
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    const element = document.documentElement
    if (theme === 'dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#2e394d] transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <MdDarkMode size={20} className="text-white" />
      ) : (
        <MdOutlineDarkMode size={20} className="text-gray-700 hover:text-primary" />
      )}
    </button>
  )
}

export default DarkMode;