import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src="../images/restauranfood.jpg" className='footer-img'/>
      </div>
      <div className='footer-txt'>
      <div className="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li><a href="/link5">Address</a></li>
          <li><a href="/link6">Phone number</a></li>
          <li><a href="/link6">Email</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="/link7">Facebook</a></li>
          <li><a href="/link8">Instagram</a></li>
          <li><a href="/link9">TikTok</a></li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

