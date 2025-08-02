<template>
	<div>
		<le-button type="primary" loading>Loading</le-button>
		<le-button type="primary" loading-icon="circle-notch" loading
			>Loading</le-button
		>
		<le-button type="primary" loading>
			<template #loading>
				<le-icon style="margin-right: 6px" icon="star" spin />
			</template>
			Loading
		</le-button>
	</div>
</template>
