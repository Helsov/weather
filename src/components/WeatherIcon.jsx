import React from 'react';
import '../weather/css/weather-icons.min.css';

function WeatherIcon({ time, weatherCode }) {
    const timeOfDay = (time > 7 && time < 18) ? 'day' : 'night';
    const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`;

    return <i className={className}></i>;
}

export default WeatherIcon;