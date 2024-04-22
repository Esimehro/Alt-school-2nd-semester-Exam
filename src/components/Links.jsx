import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
    <ul className="flex items-center gap-16">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700 hover:animate-bounce cursor-pointer">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:text-blue-700 hover:animate-bounce cursor-pointer">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/repos" className="text-blue-500 hover:text-blue-700 hover:animate-bounce cursor-pointer">
              REPOS
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Links;