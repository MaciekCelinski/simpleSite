<template>
	<div id="app">
		<Header />
		<Intro />
		<Breaker symbol="helmet"/>
		<FirstSection />
		<Breaker symbol="hammer"/>
	</div>
</template>

<script>
import Header from "./components/Layout/Header.vue";
import Intro from "./components/Layout/Intro.vue";
import FirstSection from "./components/FirstSection.vue";
import Breaker from "./components/Layout/Breaker";

// https://freeicons.io/renovation-and-carpentry-icons/hammer-icon-1420

export default {
	name: "App",
	components: {
		Header,
		Intro,
		FirstSection,
		Breaker,
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
