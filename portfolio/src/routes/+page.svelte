<script>
	const name = 'Mitchell';
	const src = 'favicon.png';
	import GreenParagraph from './component.svelte';
</script>

<h1>Welcome to SvelteKit, {name}.</h1>
<img {src} alt="{name}'s image." />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<GreenParagraph />
