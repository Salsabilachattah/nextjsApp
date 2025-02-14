import React , {useState} from 'react';
import { useRouter } from 'next/router';

import ip from 'ip';
import './SearchBar.css';


export default function SearchBar({ onSearch} ) {
    const [ipAddress, setIpAddress] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [shake, setShake] = useState(false);
    const router = useRouter();

    const handleSearch = () => {
        if (ip.isPrivate(ipAddress)) {
            setIsPrivate(true);
            setShake(true);
            setTimeout(() => setShake(false), 100);
        } else {
            setIsPrivate(false);
            onSearch(ipAddress);
           
        }
    };

    return (
        <div className={`search-bar ${isPrivate ? 'private-bar' : ''}${shake ? 'shake' : ''}`}>
        {/* Private addresses are translated to public ones thanks to NAT , did you even study networking ? */}
                <input type="text" 
                placeholder="Enter a public Ip address " 
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                /> 

                <a href="#" className="search-button" onClick={handleSearch}>
                    <img src='/icons8-search-50.png' alt="search" ></img>
                </a>  
        </div>
    )
}