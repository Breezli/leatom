<template>
	<div class="home-hero-image">
		<!-- <img src="/path/to/your/image.png" alt="Hero Image" /> -->
	</div>
</template>

<script>
	export default {
		name: 'HomeHero',
	}
</script>

<style>
	.home-hero-image {
		text-align: center;
		margin-top: 50px;
		animation: fadeIn 2s ease-in-out;
	}

	.home-hero-image img {
		width: 100%;
		max-width: 800px;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		.home-hero-image img {
			width: 90%;
			max-width: 400px;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
