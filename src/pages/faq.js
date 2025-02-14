 import React from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import Question from '../components/Question.js';
import './styles.css';
export default function Faq() {
    const data = [10, 20];
  return (
    <div className="faq">
      <Navbar />
      <div className='faq-container'>
        <Question />
        </div>
      
      <Footer />
    </div>
  );
}