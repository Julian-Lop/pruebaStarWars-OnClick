import React from 'react'

export default function Card({title,info}){
    return (
        <div className='Card'>
            <h2>{title ? title : null}</h2>
        </div>
    )
}