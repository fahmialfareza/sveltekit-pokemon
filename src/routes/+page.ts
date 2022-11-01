import type { Load } from '@sveltejs/kit';
import type { IPokemon } from '../types/pokemon.type';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon: IPokemon[] = (data.results as IPokemon[]).map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	return { pokemon: loadedPokemon };
};
