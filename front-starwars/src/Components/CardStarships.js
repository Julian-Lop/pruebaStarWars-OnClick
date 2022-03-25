import React from 'react'
import { useSelector } from 'react-redux'


export default function CardStarships({title,info}){

    const film = useSelector((state) => state.films)

    return (
        <div>
            <div className='Card'>
                <h2>{title ? title : null}</h2>
                <div>
                    {info ? 
                    <div>
                        <h4>Model: {info.model}</h4>
                        <h4>Manufacturer: {info.model}</h4>
                        <h4>Cost in credits: {info.cost_in_credits}</h4>
                        <h4>Length: {info.length}</h4>
                        <h4>Max atmosphering speed: {info.max_atmosphering_speed}</h4>
                        <h4>Crew: {info.crew}</h4>
                        <h4>Passengers: {info.passengers}</h4>
                        <h4>Cargo capacity: {info.cargo_capacity}</h4>
                        <h4>Consumables: {info.consumables}</h4>
                        <h4>Hyperdrive rating: {info.hyperdrive_rating}</h4>
                        <h4>MGLT: {info.MGLT}</h4>
                        <h4>Starships class: {info.starship_class}</h4>
                        <h4>Films : {info.films.map(f => film.results[Number(f.substr(-2,1))-1].title+', ')}</h4>
                    </div>:null}
                </div>
            </div>
        </div>
    )
}