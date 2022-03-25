import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardStarships from './CardStarships'

export default function Starships() {
    const starshipsSW = useSelector((state) => state.starships)

    useEffect(()=>{
    },[starshipsSW])

    return (
        <div className='Container'><h1>Starships</h1>
            <div className='Starships'>
                {starshipsSW.results ? starshipsSW.results.map(starship => <CardStarships title={starship.name} info={starship}/>): <h3>Cargando</h3>}
            </div>
        </div>
    )
}