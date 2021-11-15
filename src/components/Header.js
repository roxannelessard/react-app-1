import React from 'react'
import Button from './Button'

const Header = () => {
  const onClick = (e) => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button
      onClick={onClick}
      color='black'
      text='Add'
      />
    </header>
  )
}

export default Header
