import React, {Component} from 'react';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';
import './style.css'; 

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            icon: ``,
            time: ``,
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
            const time = new Date().getHours();


            this.setState({
                time: `${time}`,
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
        const {icon, time, city, temperature, weatherCode, description, fetching} = this.state;
        return fetching ?
            <div className="app">Загрузка...</div>
        :
            <div className='app' data-time={time}>
                <WeatherIcon time={time} weatherCode={weatherCode} icon={icon}/>
                <WeatherDetails city={city} temperature={temperature} description={description}/>
            </div>
        
    }
}

export default Weather;