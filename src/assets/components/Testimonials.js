import React from "react";
import testimonialData from "../testimonialData.js"

export default function Testimonials() {
    return (
<div className="testimonials">
      {testimonialData.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={`images/${testimonial.photo}`} alt={testimonial.name} />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </div>
  );
}