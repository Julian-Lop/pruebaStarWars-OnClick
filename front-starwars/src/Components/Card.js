import React, { useState } from 'react'
import ModalCharacter from './ModalCharacter'

export default function Card({title,info}){

    const [visibility, setvisibility] = useState(false)
    const [infodata, setinfodata] = useState()

    const handleShowModal = (info) => {
        setinfodata(info)
        setvisibility(!visibility)
    }

    return (
        <div>
            <div className='Card'>
                <h2>{title ? title : null}</h2>
                <div>
                    {info ? info.map(e => <p onClick={() => handleShowModal(e)}>{e.name}</p>):<h2>Cargando</h2>}
                </div>
            </div>
        {visibility ? <ModalCharacter info={infodata} setvisibility={setvisibility}/> : null}
        </div>
    )
}