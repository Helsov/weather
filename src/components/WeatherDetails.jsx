import React from 'react';
import WeatherClock from './WeatherClock';

function WeatherDetails({ city, temperature, time, description }) {
    
    return (
        <div className="weather-details">
            <WeatherClock/>
            <div className="city">{city}</div>
            <div className="temperature">{temperature} &deg;C</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default WeatherDetails;