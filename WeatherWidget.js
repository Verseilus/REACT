import React, {Component} from 'react'

class WeatherWidget extends Component {
    constructor(props){
      super(props)
      this.state = {
        weatherData: {},
        cityName: ''
      }
      this.buttonRef = React.createRef()
    }

    render() {
        const {weatherData, cityName} = this.state
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=58a7a6b11abe0f860bbbdf402be2b096&units=metric`
        const onClickFunction = () => {
            fetch(api)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    weatherData: data,
                    cityName: ''
                })})
        }
        const onKeyFunction = (event) => {
            if(event.keyCode === 13){
                this.buttonRef.current?.click()
            }
        }
        return (
            <div>
                <h1>What's the weather like in ...?</h1>
                <input
                value={cityName}
                onChange={event => this.setState({
                    cityName: event.target.value
                })}
                onKeyDown={onKeyFunction}>
                </input>
                <button onClick={onClickFunction} ref={this.buttonRef}>Search</button>
                <div>
                    <div>{cityName}</div>
                    {weatherData.name ? <h2>{weatherData.name}</h2> : <div><i>Please type in a city name in the above field</i></div>}
                    <div>
                    {weatherData.weather ?
                    <div>
                        <div>Weather: {weatherData.weather[0].main}</div>
                        <div>Temperature: {weatherData.main.temp}°C</div>
                        <div>Humidity: {weatherData.main.humidity}%</div>
                    </div> : null
                    }
                    </div>
                </div>
            </div>
        )
    }
  }

  export default WeatherWidget