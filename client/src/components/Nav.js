import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import About from './About';
import Home from './Home';
import Account from './Account';
import Resources from './Resources';

function Nav() {
  return (
    <Router>
      <header className="flex-row px-1">
        <h1>
          <Link to="/">jr.JoinUp()</Link>
        </h1>
        <nav>
          <ul className="flex-row nav-bar">
            <li>
              <Link to="/about" className="section-link">
                about
              </Link>
            </li>
            <li>
              <Link to="/resources" className="section-link">
                resources
              </Link>
            </li>
            <li>
              <Link to="/account" className="section-link">
                account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        path="*"
        element={<Navigate to="/home" />}
        >
        </Route>
        <Route 
        path="/about"
        element={<About/>}
        >
        </Route>
        <Route 
        path="/resources"
        element={<Resources/>}
        >
        </Route>
        <Route 
        path="/account"
        element={<Account/>}
        >
        </Route>
        <Route path="/home" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default Nav;
