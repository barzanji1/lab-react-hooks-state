import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  // Handle button click to toggle mode
  const handleClick = () => {
    onToggle()
  }

  return (
    <button onClick={handleClick}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  )
}

export default DarkModeToggle