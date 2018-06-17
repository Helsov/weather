import React from 'react';

class WeatherClock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render(){
        return (
        <div className='time'>{this.state.time.toLocaleTimeString()}</div>
        )
    }
}


export default WeatherClock;