<script>
	import { StatusBar, Style } from '@capacitor/status-bar';
	import { Preferences } from '@capacitor/preferences';
	import Counter from '$lib/components/Counter.svelte';
	import { onMount } from 'svelte';
    
	let count = 0;
	onMount(async () => {
		await StatusBar.setStyle({ style: Style.Dark });
		const { value } = await Preferences.get({ key: 'count' });
		count = value ? parseInt(value) : 0;
	});

	const onClick = async () => {
		await Preferences.set({
			key: 'count',
			value: count.toString(),
		});
	};
</script>

<div>
	<Counter bind:count {onClick} />
</div>

<style>
	div {
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #0a2540;
	}
</style>
