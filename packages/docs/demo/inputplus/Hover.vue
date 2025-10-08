<script setup>
	import { ref } from 'vue'
	const searchValue = ref('')
</script>

<template>
	<le-icon></le-icon>
	<le-search
		v-model="searchValue"
		placeholder="Enter text..."
		class="search-element"
		container-class="search-container" />
</template>
