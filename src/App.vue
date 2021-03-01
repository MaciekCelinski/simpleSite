<template>
	<div id="app">
		<Header />
		<p>{{ $t("message") }}</p>
	</div>
</template>

<script>
import Header from "./components/Layout/Header.vue";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style>
html {
	margin: 0;
	padding: 0;
  
}
</style>
