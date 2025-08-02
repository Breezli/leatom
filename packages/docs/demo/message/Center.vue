<script lang="ts" setup>
	import { LeMessage } from 'leatom'

	const openCenter = () => {
		LeMessage({
			showClose: true,
			message: 'Centered text',
			center: true,
		})
	}
</script>

<template>
	<le-button plain @click="openCenter">Centered text</le-button>
</template>
