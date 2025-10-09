<script lang="ts" setup>
	import { LeMessage } from 'leatom'

	const open1 = () => {
		LeMessage({
			message: 'Congrats, this is a success message.',
			type: 'success',
		})
	}
	const open2 = () => {
		LeMessage.success('Congrats, this is a success message.')
	}
</script>
<template>
	<div>
		<le-button @click="open1">插件式调用</le-button>
		<le-button @click="open2">函数式调用</le-button>
	</div>
</template>
