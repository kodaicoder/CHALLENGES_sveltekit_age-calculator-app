<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div>
	<main class="grid h-screen place-content-center bg-offWhite">
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>
