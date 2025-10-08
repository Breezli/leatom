<template>
	<div style="display: flex; flex-direction: column; gap: 20px">
		<!-- 普通密码 -->
		<le-input v-model="password" type="password" placeholder="请输入密码" />

		<!-- 带眼睛的密码 -->
		<le-input v-model="password" type="password-view" placeholder="请输入密码" />

		<!-- 带发送按钮 -->
		 <div style="display: flex; gap: 10px">
			<le-input v-model="code" @send="handleSendCode" />
			<le-button size="auto" type="primary" plain>获取验证码</le-button>
		 </div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	const password = ref('')
	const code = ref('')
	const isSending = ref(false)

	const handleSendCode = () => {
		isSending.value = true
		setTimeout(() => {
			isSending.value = false
		}, 3000)
	}
</script>
