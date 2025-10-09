<script lang="ts" setup>
	import { LeMessage } from 'leatom'

	const open1 = () => {
		LeMessage({
			showClose: true,
			message: 'This is a message.',
			type: 'info',
		})
	}
	const open2 = () => {
		LeMessage({
			showClose: true,
			message: 'Congrats, this is a success message.',
			type: 'success',
		})
	}
	const open3 = () => {
		LeMessage({
			showClose: true,
			message: 'Warning, this is a warning message.',
			type: 'warning',
		})
	}
	const open4 = () => {
		LeMessage({
			showClose: true,
			message: 'Error, this is a error message.',
			type: 'danger',
		})
	}
</script>

<template>
	<le-button type="info" :plain="true" @click="open1">Message</le-button>
	<le-button type="success" :plain="true" @click="open2">Success</le-button>
	<le-button type="warning" :plain="true" @click="open3">Warning</le-button>
	<le-button type="danger" :plain="true" @click="open4">Error</le-button>
</template>
