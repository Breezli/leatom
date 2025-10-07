<script setup>
	import { ref } from 'vue'
	const inputValue = ref('')
</script>

<template>
	<le-input
		v-model="inputValue"
		placeholder="Enter text..."
		class="input-element"
		container-class="input-container" />
</template>
