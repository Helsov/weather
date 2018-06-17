import React, {Component} from 'react';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';
import WeatherClock from './components/WeatherClock';
import './style.css'; 

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            icon: ``,
            hourse: ``,
            city: ``,
            temperature: ``,
            weatherCode: ``,
            description: ``,
            fetching: true,
            
        }
    }
    

    componentWillMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=499099&units=metric&lang=ru&APPID=ce804bdb83a3b31066a3d5d20b146d32`)
        .then((response) => response.json())
        .then((dataWeather) => {
            const hourse = new Date().getHours();


            this.setState({
                hourse: `${hourse}`,
                city: dataWeather.name,
                weatherCode: dataWeather.weather[0].id,
                icon: dataWeather.weather[0].icon,
                temperature: dataWeather.main.temp,
                description: dataWeather.weather[0].description,
                fetching: false
            });
        })
        .catch(error => console.log(error));

    }
    

    render(){
        const {icon, hourse, city, temperature, weatherCode, description, fetching} = this.state;
        return fetching ?
            <div className="app">Загрузка...</div>
        :
            <div className='app' data-hourse={hourse}>
                <WeatherIcon time={hourse} weatherCode={weatherCode} icon={icon}/>
                <div className="weather-details">
                    <WeatherClock/>
                    <WeatherDetails city={city} temperature={temperature} description={description}/>
                </div>
            </div>
        
    }
}

export default Weather;