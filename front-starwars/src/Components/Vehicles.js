import React from 'react'
import { useSelector } from 'react-redux'
import CardVehicles from './CardVehicles'

export default function Vehicles() {
    const vehiclesSW = useSelector((state) => state.vehicles)

    return (
        <div className='Container'><h1>Vehicles</h1>
            <div className='Vehicles'>
                {vehiclesSW.results ? vehiclesSW.results.map(vehicle => <CardVehicles title={vehicle.name} info={vehicle}/>): <h3>Cargando</h3>}
            </div>
        </div>
    )
}