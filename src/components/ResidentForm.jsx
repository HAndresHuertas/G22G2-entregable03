import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({ handleSubmit }) => {
    return (
        <section className='search__box'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="idLocation" placeholder='Type a Location ID' />
                <button>Search</button>
            </form>
        </section>
    )
}

export default ResidentForm