<script>
    import { StatusBar, Style } from '@capacitor/status-bar';
	import Counter from '$lib/components/Counter.svelte';
	import { onMount } from 'svelte';

    onMount(async () => {
		try {
			await StatusBar.setStyle({ style: Style.Dark });
		} catch (e) {
			console.log(e);
		}
    });
</script>

<div>
    <Counter />
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