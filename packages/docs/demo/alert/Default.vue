<template>
	<h3>通过 slot 传入内容</h3>
	<div style="max-width: 600px">
		<le-alert type="success">Success alert</le-alert>
		<le-alert type="info">Info alert</le-alert>
		<le-alert type="warning">Warning alert</le-alert>
		<le-alert type="danger">Error alert</le-alert>
	</div>
	<h3>通过 prop 传入内容</h3>
	<div style="max-width: 600px">
		<le-alert type="success" title="Success alert" />
		<le-alert type="info" title="Info alert" />
		<le-alert type="warning" title="Warning alert" />
		<le-alert type="danger" title="Error alert" />
	</div>
</template>
