import type { Load } from '@sveltejs/kit';
import type { IPokemanDetail } from '../../../types/pokemanDetail.type';
import type { IPokemon } from '../../../types/pokemon.type';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ params }) => {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = (await res.json()) as IPokemanDetail;
	return { pokeman };
};
