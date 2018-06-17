import React from 'react';

function WeatherDetails({ city, temperature, time, description }) {
    
    return (
        <div>
            <div className="city">{city}</div>
            <div className="temperature">{temperature} &deg;C</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default WeatherDetails;