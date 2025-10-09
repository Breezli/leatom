<template>
	<le-search v-model="keyword" @search="handleSearch" />
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const keyword = ref('')

	const handleSearch = (value: string) => {
		// 执行搜索逻辑
	}
</script>
