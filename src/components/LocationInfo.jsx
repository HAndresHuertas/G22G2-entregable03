import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({ location }) => {
    return (
        <section className='locationInfo__box'>
            <h2 className='locationInfo__title'>{location?.name}</h2>
            <ul className='locationInfo__list'>
                <li><span>Type: </span>{location?.type}</li>
                <li><span>Dimension: </span>{location?.dimension}</li>
                <li><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </section>
    )
}

export default LocationInfo