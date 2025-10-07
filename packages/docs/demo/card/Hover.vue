<template>
	<div style="display: flex; gap: 20px">
		<le-card header="悬停效果的卡片" :hover="true" style="width: 300px">
			<p>这是一个普通悬停效果的卡片。</p>
		</le-card>
		<le-card header="悬浮效果的卡片" :hover_shadow="true" style="width: 300px">
			<p>这是一个带有悬浮效果的卡片。</p>
		</le-card>
		<le-card header="放大效果的卡片" :hover_scale="true" style="width: 300px">
			<p>这是一个带有放大效果的卡片。</p>
		</le-card>
	</div>
</template>
