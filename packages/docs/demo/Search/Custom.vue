<template>
	<le-search
		placeholder="修改样式后的搜索框"
		icon="code"
		icon-color="#c52cdc"
		custom-class="my-custom-search"
		:custom-style="{ maxWidth: '400px' }" />
</template>

<style scoped>
	.my-custom-search {
		margin: 1rem auto;
	}
	.my-custom-search :deep(.le-search__input) {
		background-color: #ecc6f4;
		&::placeholder {
			color: rgba(181, 84, 205, 0.647);
		}
	}
	/* 使用深度选择器穿透 scoped 样式 */
	.my-custom-search :deep(.le-search__input):focus {
		box-shadow: 0 0 0 2px #c52cdc;
		background-color: white;
		&::placeholder {
			color:rgb(208, 144, 218);
		}
	}
</style>
