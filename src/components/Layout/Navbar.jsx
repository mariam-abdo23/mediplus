import React from 'react'


export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg p-3 fixed-top bg-light">
  <div className="container">
    <a className="navbar-brand fs-2" style={{fontWeight:"900"}} href="#Home">Mediplus</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-5 d-flex gap-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Department">Department</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Doctors">Doctors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
