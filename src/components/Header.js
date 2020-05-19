import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex">
      <Link to="/">ホーム</Link>
      <Link to="/about">使い方</Link>
    </header>
  )
}

export default Header

