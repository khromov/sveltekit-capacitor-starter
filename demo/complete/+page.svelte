<script>
	import { StatusBar, Style } from '@capacitor/status-bar';
	import { LocalNotifications } from '@capacitor/local-notifications';
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

		await LocalNotifications.schedule({
			notifications: [
				{
					title: 'SvelteKit',
					body: `You clicked ${count} times`,
					id: 1,
					schedule: { at: new Date() },
				},
			],
		});
	};

	const registerNotifications = async () => {
		await LocalNotifications.requestPermissions(); 
	};
</script>

<div>
	<div>
		<Counter bind:count {onClick} />
		<input type="button" value="Register notifications" on:click={registerNotifications} />
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
