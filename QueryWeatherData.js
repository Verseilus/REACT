export default function QueryWeatherData(record, city){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58a7a6b11abe0f860bbbdf402be2b096&units=metric`
        fetch(api)
            .then(res => res.json())
            .then(data => {
                record.setState({
                    weatherData: data
                })
            })
}