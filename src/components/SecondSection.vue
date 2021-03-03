<template>
	<div id="secondSection">
		<base-banner>{{ $t("bhpKnowledge") }}</base-banner>
		<div id="secondContent">
			<div id="bhpThemes">
				<base-card
					v-for="theme in themes"
					:key="theme"
					:image="theme"
					:text="$t(`bhp${theme}`)"
					folder="bhp"
				></base-card>
			</div>
			<div id="bhpPic">
				<img id="bhpLogo" src="../assets/BHP_logo2.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				themes: [1, 2, 3, 4, 5, 6],
			};
		},
		mounted() {
			window.addEventListener("scroll", this.onScroll);
		},
		beforeUnmount() {
			window.removeEventListener("scroll", this.onScroll);
		},
		methods: {
			onScroll(e) {
				if (e.target.documentElement.scrollTop > 990) {
					document.getElementById("bhpLogo").classList.add("onStage");
				} else {
					document.getElementById("bhpLogo").classList.add("offStage");
				}
			},
		},
	};
</script>

<style scoped>
	#secondSection {
		text-align: center;
		overflow: hidden;
	}

	#secondContent {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
	}

	#bhpThemes {
		display: grid;
		margin: 20px 80px;
		gap: 10px 0px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	#bhpPic {
		display: flex;
		justify-items: center;
		align-items: center;
	}

	#bhpLogo {
		max-width: 60%;
		margin: auto;
	}

	.offStage {
		transform: translateX(600px);
		transition: transform 1s;
	}
	.onStage {
		transform: translateX(0);
		transition: transform 1s;
	}
</style>