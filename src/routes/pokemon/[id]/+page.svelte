<script lang="ts">
	import type { IPokemanDetail } from '../../../types/pokemanDetail.type';

	type Data = {
		pokeman: IPokemanDetail;
	};

	/** @type {import('./$types').PageData} */
	export let data: Data;

	$: pokeman = data.pokeman;
	$: type = pokeman.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
		<strong>{pokeman.weight}</strong>
	</p>
	<img src={pokeman.sprites['front_default']} alt={pokeman.name} class="card-image" />
</div>
