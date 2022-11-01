<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { IPokemon } from 'src/types/pokemon.type';

	export let pokeman: IPokemon;
</script>

<a
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokeman.id}`}
	transition:fade
>
	<img src={pokeman.image} alt={pokeman.name} />
	<h2>{pokeman.id}. {pokeman.name}</h2>
</a>
