import type { RequestHandler, RequestEvent } from '@sveltejs/kit';

import type { IPokemanDetail } from '../../../../types/pokemanDetail.type';

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = (await res.json()) as IPokemanDetail;

	return new Response(JSON.stringify(pokeman), {
		status: 200
	});
};
