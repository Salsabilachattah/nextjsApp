import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar({onSearch}) {
  return (
    <nav className="navbar-container">
      <h1>reseau4thewin</h1>
      <SearchBar onSearch={onSearch}/>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>MyIP</a>
          </Link>
        </li>
        <li>
          <Link href="/speed" legacyBehavior>
           <a>Bandwidth</a> 
          </Link>
        </li>
        <li>
          <Link href="/faq"legacyBehavior>
           <a>FAQ</a> 
          </Link>
        </li>
      </ul>
    </nav>
  );
}