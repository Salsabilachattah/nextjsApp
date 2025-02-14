import React from 'react';
import './SearchBar.css';
export default function SearchBar({ data }) {
    return (
        <div className="search-bar">       
                <input type="text" placeholder="Enter Ip address " />
                <a href="#" className="search-button"><img src='/icons8-search-50.png' alt="search" >
                </img></a>  
        </div>
    )
}