import WeatherAPI from './WeatherAPI'

const SingleMap = ({country}) =>{
return(
    <div>
    <h1>{country.name}</h1>
    <br></br>
    Capital: {country.capital}
    <br></br>
    Population: {country.population}
    <br></br>
    <br></br>
    <h2>Languages</h2>
{country.languages.map(language => <li key={language.iso639_1}>{language.name} </li>
    )}
    <img src={country.flag} alt='pic of flag' height='200' width='300'></img>
    <br></br>
    <h2>Temperature in {country.capital}</h2>
    <br></br>
    <WeatherAPI country={country} />
   
   </div>
)
}

export default SingleMap