import React from 'react'
import ResidentCard from './ResidentCard'
import "./styles/ResidentList.css"

const ResidentList = ({ pagintion }) => {
    return (
        <section className='residentsList'>
            {
                pagintion()?.map(resident => <ResidentCard key={resident} resident={resident} />)
            }
        </section>
    )
}

export default ResidentList