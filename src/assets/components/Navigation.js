import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
          <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
        </ul>
        </nav>
       )
        }