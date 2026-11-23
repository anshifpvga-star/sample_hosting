"use client";
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          id="navbarMenu"
          tabIndex={-1}
          aria-labelledby="navbarMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarMenuLabel">
              Menu
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
  