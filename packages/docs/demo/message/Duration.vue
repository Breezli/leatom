<script lang="ts" setup>
	import { LeMessage } from 'leatom'

	const open1 = () => {
		LeMessage({
			message: '延时 1s 消失',
			duration: 1000,
		})
	}
	const open2 = () => {
		LeMessage({
			message: '延时 3s 消失',
			duration: 3000,
		})
	}
	const open3 = () => {
		LeMessage({
			message: '延时 5s 消失',
			duration: 5000,
		})
	}
	const open4 = () => {
		LeMessage({
			message: '延时 10s 消失',
			duration: 10000,
		})
	}
</script>

<template>
	<le-button :plain="true" @click="open1">1 s</le-button>
	<le-button :plain="true" @click="open2">3 s</le-button>
	<le-button :plain="true" @click="open3">5 s</le-button>
	<le-button :plain="true" @click="open4">10 s</le-button>
</template>
