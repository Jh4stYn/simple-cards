import React from 'react'
import './styles/Card.css'

const Card = ({color, text}) => {

    const borderColor = {
        borderColor: color,
    }

    const textColor = {
        color: color,
    }

    return (
        <article style={borderColor} className='card'>
            <h2 className='card__header'>Header</h2>
            <h3 className='card__title'>{text} card title</h3>
            <p style={textColor} className='card__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum vel quisquam optio rem impedit!</p>
        </article>
    )
}

export default Card