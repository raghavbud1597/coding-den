import React from 'react'
import '../styles/Navbar.scss'

export default function Navbar() {
    return (
        <div className="page-navbar">
            <ul className="nav nav-pills justify-content-end">
                <li class="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#question-list">List</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Subscribe</a>
                </li>
            </ul>
        </div>
    )
}
