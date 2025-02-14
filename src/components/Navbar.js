import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import './Navbar.css';
import { useRouter } from 'next/router';

export default function Navbar({onSearch}) {
  const router = useRouter();
  return (
    <nav className="navbar-container">
      <h1>reseau4thewin</h1>
    {router.pathname === '/' && <SearchBar onSearch={onSearch} />}
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