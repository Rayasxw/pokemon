import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PokemonCard.css'

function PokemonCard({ url, name }) {
    const [image, setImage] = useState('')

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await axios.get(url)
            setImage(response.data.sprites.other.dream_world.front_default)
        }
        fetchPokemonDetails()
    }, [url])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className="pokemon">
            <div className="pokemon-card">
                <img src={image || '/images/default.png'} alt={name} />
                <p>{capitalizeFirstLetter(name)}</p>
                <button>
                    <a href="#">Подробнее</a>
                </button>
            </div>
        </div>
    )
}

export default PokemonCard
