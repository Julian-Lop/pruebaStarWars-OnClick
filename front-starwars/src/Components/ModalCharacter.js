import React from 'react'

export default function ModalCharacter({info,setvisibility}){

    const exit = () => {
        setvisibility(false)
    }

    return (
        <div className='ModalCharacter'>
            {info ? 
            <div>
                <h3>{info.name}</h3>
                <h4>Height: {info.height}</h4>
                <h4>Mass: {info.mass}</h4>
                <h4>Hair color: {info.hair_color}</h4>
                <h4>Eye color: {info.eye_color}</h4>
                <h4>Birth year: {info.birth_year}</h4>
                <h4>Gender: {info.gender}</h4>
            </div>:<h1>Cargando</h1>}
            <button onClick={exit}>X</button>
        </div>
    )
}