import React from 'react';
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav className="  navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collaps navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <a className="navbar-brand fw-bolder fs-4 mx-auto" href="/">
              <img src="/assets/logo.png" width="150" height="30" alt="" />
            </a>
            <button
              className="btn btn-outline-#07425b ms-auto px-4 rounded-pill"
              style={{ backgroundColor: '#07425b', color: 'white' }} onClick={() => { window.location.href = '/sign'; }}>
            
              <i className="fa fa-sign-in me-2"></i>Login
            </button>
            <button
              className="btn btn-outline-#07425b ms-2 px-4 rounded-pill"
              style={{ backgroundColor: '#07425b', color: 'white' }} onClick={() => { window.location.href = '/sign'; }}>
            
              <i className="fa fa-user-plus me-2"></i>Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
