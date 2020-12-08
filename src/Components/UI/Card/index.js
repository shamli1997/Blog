import React from 'react'
import Logo from '../../Logo'
import './style.css'

const Card = (props) => {
    return (
        <div className="card"{...props}>
            {props.children}
        </div>
    )
}

export default Card