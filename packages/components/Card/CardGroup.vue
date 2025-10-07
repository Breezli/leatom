<script setup lang="ts">
	import { provide, reactive } from 'vue'
	import { CARD_GROUP_CTX_KEY } from './constants'

	defineOptions({
		name: 'LeCardGroup',
	})

	provide(
		CARD_GROUP_CTX_KEY,
		reactive({
			inGroup: true,
		})
	)
</script>

<template>
	<div class="le-card-group">
		<slot></slot>
	</div>
</template>

<style scoped>
    @import './style.scss';
</style>