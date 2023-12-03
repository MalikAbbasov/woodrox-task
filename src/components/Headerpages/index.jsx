import React from 'react'
import { Link } from 'react-router-dom'
import "./headerpages.scss"

function Headerpages({pageName, page, pageLink}) {

  return (
    <div>
        <header id='header_pages'>
                <div className="container">
                    <h1>{pageName}</h1>
                    <div className="links">
                    <Link to={"/"}>Home</Link>
                    <i class="fa-solid fa-right-long"></i>
                    <Link to={pageLink}>{page}</Link>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default Headerpages