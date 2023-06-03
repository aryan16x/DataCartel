import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black header_navbar">
    <div className="container-fluid">
      <Link to={"/"}><a className="navbar-brand header_name  " href="#" ><b>DATACARTEL</b></a></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <b>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav header_list">
          <li className="nav-item header_listitem">
            <a className="nav-link active" href="/">HOME</a>
          </li>
          <li className="nav-item header_listitem">
            <a className="nav-link" href="/campgrounds">ABOUT US</a>
          </li>
        </ul>
      </div>
      </b>
    </div>
    
  </nav>
    </>
  )
}

export default Header