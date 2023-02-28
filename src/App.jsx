import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'

import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENTS_PERPAGE = 12

function App() {
  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagintion = () => {

    const maxLimit = page * RESIDENTS_PERPAGE
    const minLimit = maxLimit - RESIDENTS_PERPAGE
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }

  const numberPages = () => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE)
    const arrayPages = []
    for (let i = 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
    return arrayPages
  }

  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation]);

  return (
    <div className="App">
      <header className='App__header'>
        <img src="" alt="" />

      </header>
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <ul className='listaPagNum'>
        {
          numberPages().map(numberPages => <li className='listaPagNum__box' onClick={() => setPage(numberPages)} key={numberPages}>{numberPages}</li>)
        }
      </ul>
      <ResidentList pagintion={pagintion} />
      <ul className='listaPagNum'>
        {
          numberPages().map(numberPages => <li className='listaPagNum__box' onClick={() => setPage(numberPages)} key={numberPages}>{numberPages}</li>)
        }
      </ul>
    </div>
  )
}

export default App
