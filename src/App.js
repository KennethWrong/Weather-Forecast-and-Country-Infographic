import {useEffect,useState} from 'react'
import axios from 'axios'
import SingleMap from './components/singleMap'

const CountryCheck = ({keyCountry,countries,setCountry}) => {
  let sum = 0
  let list = []

  countries.forEach(country => {
    if(country.name.toLowerCase().includes(keyCountry.toLowerCase())){
      sum++
      list.push(country)
    }
  })

  if(sum >10){
    return 'Too many matches, specify another filter'
  }else if(sum ===1){
    return(
      <div>
      {list.map(country => 
        <SingleMap key={country.numericCode} country={country} />
      )}
      </div>
    )
  }
  else{
    return (list.map(country => {
      return(
      <div key={country.numericCode}>
            {country.name} 
            <button onClick={()=>setCountry(country.name)}>
                Show
                </button>
        </div>
      )
    }))
}
}


function App() {
  const [country,setCountry] = useState('')
  const [showCountry,setShowCountry] = useState([])

  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(resource => {
          setShowCountry(resource.data)
    })
  },[])



  return (
    <div>
      <h1>Search for a country</h1>
    <form>
     Countries: <input type ='text' onChange = {handleCountry} />
    </form>
    {<CountryCheck keyCountry={country} countries={showCountry} setCountry={setCountry}/>}
    <br></br>
    
    </div>
  );
}

export default App;
