<template>
	<div class="space-y-4">
		<le-input v-model="comment" type="comment" placeholder="写下你的评论..." />
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const comment = ref('')
</script>
