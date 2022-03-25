import styles from "../styles/Home.module.css";
import Image from "next/image";

import Card from "../components//Card";

export async function getStaticProps() {
    const maxPokemons = 251; // podemos mudar sempre que quiser o numero de poke
    const api = "https://pokeapi.co/api/v2/pokemon";

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    // add pokemons index
    data.results.forEach((item, index) => {
        item.id = index + 1;
    });
    return {
        props: {
            pokemons: data.results,
        },
    };
}

export default function Home({ pokemons }) {
    return (
        <>
            <div className={styles.title_container}>
                <h1 className={styles.title}>
                    Poke<span>Next</span>
                </h1>
                <Image
                    src="/images/pokeball.png"
                    width="50"
                    height="50"
                    alt="pokeNext"
                />
            </div>
            <div className={styles.pokemon_container}>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
}
