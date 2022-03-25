import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card.js'

export default function Films() {
    const filmSW =  useSelector((state) => state.films)

    useEffect(()=>{
        console.log('here')
    },[filmSW])

    return (
        <div className='Container'><h1>Films</h1>
            <div className='Films'>
                {filmSW.results ? filmSW.results.map(film => <Card title={film.title} />): <h3>Cargando</h3>}
            </div>
        </div>
    )
}