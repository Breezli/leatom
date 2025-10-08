<script lang="ts" setup>
	import { ref } from 'vue'

	const alertRef = ref(null)

	const openAlert = () => {
		if (alertRef.value) {
			// 调用子组件的 open 方法
			alertRef.value.open()
		}
	}

	const closeAlert = () => {
		if (alertRef.value) {
			// 调用子组件的 close 方法
			alertRef.value.close()
		}
	}
</script>

<template>
	<le-button @click="openAlert">Open Alert</le-button>
	<le-button @click="closeAlert">Close Alert</le-button>

	<le-alert ref="alertRef" title="Open & Close" show-icon />
</template>
