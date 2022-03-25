import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Starships() {
    const starshipsSW = useSelector((state) => state.starships)

    useEffect(()=>{
    },[starshipsSW])

    return (
        <div className='Container'><h1>Starships</h1>
            <div className='Starships'>
                {starshipsSW.results ? starshipsSW.results.map(starship => <Card title={starship.name}/>): <h3>Cargando</h3>}
            </div>
        </div>
    )
}