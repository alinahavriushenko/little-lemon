import React from "react";
import weeksSpecialsData from "../weeksSpecialsData";

export default function WeeksSpecials() {
    if (!weeksSpecialsData || weeksSpecialsData.length === 0) {
        return null;
    }
    return (
        <div className="specials-container">
            <h2>This weeks specials</h2>
            <div className="specials">
            {weeksSpecialsData.map((specials) => (
                <div key={specials.id} className="specials-card">
                <img src={`images/${specials.img}`} alt={specials.name} className="specials-card-img"/>
                <div className="specials-txt-content">
                    <div className="specials-title">
                <h3>{specials.name}</h3>
                <span>{specials.price}</span>
                </div>
                <p>{specials.description}</p>
                <div className="specials-delivery">
                <p>Order a delivery</p>
                <img src="../images/delivery.png" />
                </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}