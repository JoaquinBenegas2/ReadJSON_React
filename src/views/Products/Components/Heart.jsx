import React, { useState } from 'react'

//CSS
import "./Heart.css"

//ICONS
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Heart() {
    const [isLiked, setIsLiked] = useState(false)
    
    const handleClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="heart" onClick={handleClick}>
            {!isLiked ? <FaRegHeart /> : < FaHeart/>}
        </div>
    )
}

export default Heart