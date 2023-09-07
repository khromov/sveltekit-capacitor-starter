<script>
	import Counter from '$lib/components/Counter.svelte';
	import { onMount } from 'svelte';
    
	let count = 0;
	onMount(async () => {
	});

	const onClick = async () => {
	};
</script>

<div>
	<div>
		<Counter bind:count {onClick} />
	</div>
</div>

<style>
	div {
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 100vh;
		background-color: #0a2540;
	}
</style>
