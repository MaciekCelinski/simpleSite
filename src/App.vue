<template>
	<div id="app">
		<base-button id="upButton" @click="goToTop">Up</base-button>
		<Header />
		<Intro />
		<base-breaker symbol="hat" />
		<first-section />
		<base-breaker symbol="vege" />
		<base-motto
			:motto="$t('workMotto')"
			:mottoAuthor="$t('workMottoAuthor')"
		/>
		<base-breaker symbol="sushi" />
		<second-section />
		<base-breaker symbol="grill" />
		<base-motto
			:motto="$t('eatMotto')"
			:mottoAuthor="$t('eatMottoAuthor')"
		/>
		<base-breaker symbol="cow" />
		<third-section />
		<base-breaker symbol="paw" />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Layout/Header.vue";
import Intro from "./components/Intro.vue";
import FirstSection from "./components/FirstSection.vue";
import SecondSection from "./components/SecondSection.vue";
import ThirdSection from "./components/ThirdSection.vue";
import Footer from "./components/Layout/Footer";

// https://freeicons.io/renovation-and-carpentry-icons/hammer-icon-1420

export default {
	name: "App",
	components: {
		Header,
		Intro,
		FirstSection,
		SecondSection,
		ThirdSection,
		Footer,
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll);
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.onScroll);
	},
	methods: {
		onScroll(e) {
			if (e.target.documentElement.scrollTop > 100) {
				document.getElementById("upButton").style.display = "block";
			} else {
				document.getElementById("upButton").style.display = "none";
			}
		},
		goToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
	},
};
</script>

<style>
html {
	margin: 0;
	padding: 0;
	background: #fafafa;
	scroll-behavior: smooth;
}

#app {
	margin: auto;
	max-width: 1600px;
	background: white;
}

#upButton {
	display: none;
	position: fixed;
	bottom: 20px;
	right: 30px;
	z-index: 99;
	font-size: 18px;
	border: none;
	outline: none;
	background-color: red;
	color: white;
	cursor: pointer;
	padding: 15px;
	border-radius: 4px;
}

#upButton:hover {
	background-color: rgb(117, 0, 98);
	border-radius: 25px;
	transition: all 0.3s ease;
}
</style>
