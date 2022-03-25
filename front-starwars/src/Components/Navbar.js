import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="Navbar">
            <ul>
                <li><Link to="/films">Films</Link></li>
                <li><Link to="/starships">Starships</Link></li>
                <li><Link to="/vehicles">Vehicles</Link></li>
            </ul>
        </div>
    )
}