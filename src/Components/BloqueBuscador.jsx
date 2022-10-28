import { useState } from 'react'
import '../styles/BloqueBuscador.css'
import cities from '../cities.json'
import { ClickAwayListener } from '../components/OutsideController'

export function BloqueBuscador() {
  const [showMenu, setShowMenu] = useState(false)
  const [city, setCity] = useState('')
  const [finalDate, setFinalDate] = useState('');
  // const [showCalendar, setShowCalendar] = useState(false)
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  const selectCity = (city) => {
    setCity(`${city.name}, ${city.country}`);
    setShowMenu(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity('');
  }

  return (
    <div className="search_block">
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="destination" />
        <input 
          className="destination"
          type="string" 
          name="destination" 
          id="destination" 
          placeholder="¿A dónde vamos?"
          value={city}
          autoComplete="off"
          onChange={(e) => setCity(e.target.value)}
          required
          onClick={() => setShowMenu(true)}
        />
        {showMenu && (
          <div className="dropdown-menu">
            <ClickAwayListener handleClickAway={() => setShowMenu(false)}>
            {cities.map((city, index) => (
              <div key={city.id} className="city-wrapper">
                {index !== 0 ? <div className="divider" /> : null}
                <div className="city-content" onClick={() => selectCity(city)}>
                  <img src={"icons/locate.svg"} alt="location"/>
                  <div className="city-info">
                    <p>{city.name}</p>
                    <p>{city.country}</p>
                  </div>
                </div>
              </div>
            ))}
            </ClickAwayListener>
          </div>
        )}
        <label htmlFor="dates" />
        <input 
          className="dates"
          type="string" 
          name="dates" 
          id="dates" 
          placeholder="Check in - Check out"
          autoComplete="off"
          value={finalDate}
          onChange={(e) => setFinalDate(e.target.value)}
          required
          />
        <button>Buscar</button>
      </form>
    </div>
  )
}
