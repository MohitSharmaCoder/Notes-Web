import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav className="navbar navbar-light bg-dark px-3">
        <Link className="navbar-brand text-white" to="/">
          Notes
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
