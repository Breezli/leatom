<script lang="ts" setup>
	import { LeMessage } from 'leatom'

	const open1 = () => {
		LeMessage({
			message: '间距 10px',
			offset: 10,
		})
	}
	const open2 = () => {
		LeMessage({
			message: '间距 20px',
			offset: 20,
		})
	}
	const open3 = () => {
		LeMessage({
			message: '间距 50px',
			offset: 50,
		})
	}
	const open4 = () => {
		LeMessage({
			message: '间距 100px',
			offset: 100,
		})
	}
</script>

<template>
	<le-button :plain="true" @click="open1">10</le-button>
	<le-button :plain="true" @click="open2">20</le-button>
	<le-button :plain="true" @click="open3">50</le-button>
	<le-button :plain="true" @click="open4">100</le-button>
</template>
