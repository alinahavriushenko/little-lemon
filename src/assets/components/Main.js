import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import OrderOnline from '../../pages/Order Online';
import Menu from '../../pages/Menu';
import Reservations from '../../pages/Reservations';
import Login from '../../pages/Login';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<OrderOnline />} />
      </Routes>
    </div>
  );
}

export default Main;
