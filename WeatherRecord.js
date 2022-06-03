import QueryWeatherData from './QueryWeatherData.js'
import React, { Component } from 'react'

export default class WeatherRecord extends Component {
    constructor(props){
      super(props)
      this.state = {
        weatherData: {}
      }
      this.buttonRef = React.createRef()
    }

    componentDidMount() {
        QueryWeatherData(this, this.props.city)
    }

    render() {
        const {weatherData} = this.state
        var textStyle
        var imgStyle
        if (weatherData.weather){
            var textColor = '#5d656e'
            /*switch (weatherData.weather[0].main) {
                case 'Rain':
                    textColor = '#6F80B6'
                    break
                case 'Clear':
                    textColor = '#D2691E'
                    break
                case 'Clouds':
                    textColor = '#2F4F4F'
                    break
                case 'Drizzle':
                    textColor = '#008B8B'
                    break
                case 'Thunderstorm':
                    textColor = '#B16FB6 '
                    break
                case 'Snow':
                    textColor = '#5B9E9E'
                    break
                default:
                    textColor = '#696969'
            }*/
            textStyle = {
                color: textColor
            }
            
            var imgColor
            if (weatherData.weather[0].icon[2] === 'n') {
                imgColor = '#8e969f'
            } else {
                imgColor = '#b1d6ff'
            }
            imgStyle = {
                background: imgColor,
                borderRadius: '6px'
            }
        }
        return (
            <>
                {weatherData.weather ?
                    <tr style={textStyle} className='align-middle'>
                        <td><b>{this.props.city}</b></td>
                        <td>
                            <img style={imgStyle} width='30'
                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description}/>
                            {' ' + weatherData.weather[0].description}
                        </td>
                        <td>{weatherData.main.temp}°C</td>
                        <td>{weatherData.main.humidity}%</td>
                    </tr> : null
                }
            </>
        )
    }
}