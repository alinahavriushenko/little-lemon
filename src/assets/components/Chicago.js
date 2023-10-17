import React from "react";



export default function Chicago() {
    return (
        <section className="chicago-container">
            <div className="chicago-txt">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Nestled in the heart of downtown Chicago, Little Lemon offers a unique dining experience that marries traditional flavors with a modern twist. From the moment you step through the doors, you'll be captivated by the chic and inviting ambiance that sets the stage for an unforgettable meal. Little Lemon's commitment to using locally sourced ingredients ensures that each dish bursts with freshness and flavor, making it a go-to destination for food enthusiasts.</p>
            </div>
            <div className="image-overlay">
      <div className="image-container">
        <img src='/images/restaurant.jpg' alt="restaurant" className="image" />
        <img src="images/Mario and Adrian A.jpg" alt="Mario and Adrian" className="image" />
      </div>
    </div>
        </section>
    )
}

