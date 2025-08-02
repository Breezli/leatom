<script lang="ts" setup>
	import { h } from 'vue'
	import { LeMessage } from 'leatom'

	const open = () => {
		LeMessage('This is a message.')
	}

	const openVn = () => {
		LeMessage({
			message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
				h('span', null, 'Message can be '),
				h('i', { style: 'color: teal' }, 'VNode'),
			]),
		})
	}
</script>

<template>
	<le-button :plain="true" @click="open">Show message</le-button>
	<le-button :plain="true" @click="openVn">VNode</le-button>
</template>
