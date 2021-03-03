<template>
	<div id="app">
		<Header />
		<Intro />
		<base-breaker symbol="helmet" />
		<first-section />
		<base-breaker symbol="hammer" />
		<base-motto
			:motto="$t('workMotto')"
			:mottoAuthor="$t('workMottoAuthor')"
		/>
		<base-breaker symbol="saw" />
		<second-section />
	</div>
</template>

<script>
	import Header from "./components/Layout/Header.vue";
	import Intro from "./components/Layout/Intro.vue";
	import FirstSection from "./components/FirstSection.vue";
	import SecondSection from "./components/SecondSection.vue";

	// https://freeicons.io/renovation-and-carpentry-icons/hammer-icon-1420

	export default {
		name: "App",
		components: {
			Header,
			Intro,
			FirstSection,
			SecondSection,
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
