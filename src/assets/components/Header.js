import React from 'react';
import { Link } from "react-router-dom";
import Navigation from './Navigation';


export default function Header() {
  return (
    <header className="header">
        <Link to="/home"><img src="images/Vector.jpg" alt='little lemon' className='logo' /></Link>
        <Navigation />
    </header>
  );
}
