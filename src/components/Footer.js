import React from 'react';
import './Footer.css';

export default function Footer() {
return (
    <div className="footer">
            <p>© 2021 Reseau4TheWin</p>
            <div className="social-icons">
                    <a className="icon" href="https://github.com/your-profile" >
                            <img src='/icons8-github-50.png' alt="github" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/your-profile" >
                            <img src='/icons8-linkedin-50.png' alt="linkedin" />
                    </a>
                    <a className="icon" href="https://discord.com/invite/your-invite-code" >
                            <img src='./icons8-discord-50.png' alt="discord" />
                    </a>
            </div>
    </div>
);
}