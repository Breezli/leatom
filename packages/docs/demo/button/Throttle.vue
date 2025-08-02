<script setup>
	// import { LeMessage } from "leatom";
	function handleBtnClick() {
		LeMessage.info('btn click')
	}
</script>

<template>
	<p>
		<le-button @click="handleBtnClick"> with throttle</le-button>
		<le-button @click="handleBtnClick" :use-throttle="false"
			>without throttle</le-button
		>
	</p>
</template>
