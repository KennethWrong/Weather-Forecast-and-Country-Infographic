import {useEffect,useState} from 'react'
import axios from 'axios'

const WeatherAPI = ({country}) => {
    const key = process.env.REACT_APP_API_KEY
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+country.capital
    const [temperature,setTemperature] = useState('')
    const [picture,setPicture] = useState('')
    const [wind,setWind] = useState('')
    const [direction,setDirection] = useState('')

    useEffect( () => {
        axios.get(url)
             .then( response => {
                let weather = response.data.current
                setTemperature(weather.temperature)
                setPicture(weather.weather_icons)
                setWind(weather.wind_speed)
                setDirection(weather.wind_dir)
             }
             )},[])
    
    return(
        <div>
            Temperature: {temperature} Celcius
            <br></br>
            <img src={picture} alt='pic of weather' height='100' width='100'></img>
            <br></br>
            Wind: {wind} mph direction {direction}

            
        </div>
    )
    
}

export default WeatherAPI