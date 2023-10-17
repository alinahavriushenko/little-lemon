import React from 'react';
import { Link } from 'react-router-dom';


export default function CallToAction() {
    return (
        <section className='call-to-action'>
            <div className='text-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/reservations">
                    <button>Reserve A Table</button>
                </Link>            </div>
            <div>
            <img src="images/restauranfood.jpg" className='call-to-action-img'/>
            </div>
        </section>
    )
}
