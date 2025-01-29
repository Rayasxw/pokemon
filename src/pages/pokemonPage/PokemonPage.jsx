import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import styles from './PokemonPage.module.scss'
import Pagination from '../../components/pagination/Pagination'

function PokemonPage() {
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)
    const limit = 12
    const page = offset / limit + 1
    const URL = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        axios.get(`${URL}?limit=${limit}&offset=${offset}`).then((response) => {
            setPokemon(response.data.results)
        })
    }, [offset])

    const handlePrev = () => {
        if (offset > 0) {
            setOffset(prev => prev - limit)
        }
    } 
    const handleNext = () => {
        setOffset(prev => prev + limit)
    }

    return (
        <div className={styles.pokemonPage}>
            <h2>Pokemon</h2>
            <hr />
            <div className={styles.pokemonList}>
                {pokemon.map((poke, index) => (
                    <PokemonCard key={index} url={poke.url} name={poke.name} />
                ))}
            </div>
            <Pagination prev={handlePrev} next={handleNext} page={page}/>
        </div>
    )
}

export default PokemonPage
