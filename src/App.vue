<template>
	<div id="app">
		<Header/>
		<Intro />
		<FirstSection/>
	</div>
</template>

<script>
	import Header from "./components/Layout/Header.vue";
	import Intro from "./components/Layout/Intro.vue";
	import FirstSection from "./components/Layout/FirstSection.vue";

	export default {
		name: "App",
		components: {
			Header,
			Intro,
			FirstSection,
		},
	};
</script>

<style>
	html {
		margin: 0;
		padding: 0;
		background: #fafafa;
	}

	#app {
		margin: auto;
		max-width: 1600px;
		background: white;
	}

</style>
