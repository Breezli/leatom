<script setup>
	import { LeMessage } from 'leatom'

	function handleClose() {
		LeMessage.info('close callback')
	}
</script>
<template>
	<div class="basic block">
		<le-alert title="Unclosable alert" type="success" :closable="false" />
		<le-alert title="Alert with callback" type="warning" @close="handleClose" />
	</div>
</template>
