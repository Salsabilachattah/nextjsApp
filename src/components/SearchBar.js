import React , {useState} from 'react';
import './SearchBar.css';


export default function SearchBar({ onSearch} ) {
    const [ipAddress, setIpAddress] = useState('');
    const handleSearch = () => {
        onSearch(ipAddress);
    };
    return (
        <div className="search-bar">       
                <input type="text" placeholder="Enter Ip address " value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}/>
                <a href="#" className="search-button" onClick={handleSearch}><img src='/icons8-search-50.png' alt="search" >
                </img></a>  
        </div>
    )
}