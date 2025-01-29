import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import styles from './PokemonPage.module.scss'
import Pagination from '../../components/pagination/Pagination'

function PokemonPage() {
    const [pokemon, setPokemon] = useState([])
    const URL = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        axios.get(URL).then((response) => {
            setPokemon(response.data.results)
        })
    }, [])

    return (
        <div className={styles.pokemonPage}>
            <h2>Pokemon</h2>
            <hr />
            <div className={styles.pokemonList}>
                {pokemon.map((poke, index) => (
                    <PokemonCard key={index} url={poke.url} name={poke.name} />
                ))}
            </div>
            <Pagination/>
        </div>
    )
}

export default PokemonPage
