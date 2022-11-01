<script lang="ts">
	import PokemanCard from '../components/pokemanCard.svelte';
	import type { IPokemon } from '../types/pokemon.type';

	type Data = {
		pokemon: IPokemon[];
	};

	let searchTerm = '';
	let filteredPokemon: IPokemon[] = [];

	export let data: Data;

	$: pokemon = data.pokemon;

	$: {
		if (searchTerm) {
			// search the pokemon
			filteredPokemon = pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Sveltekit Pokemon</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokemon</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman (pokeman.id)}
		<PokemanCard {pokeman} />
	{/each}
</div>
