<template>
	<div id="secondSection">
		<base-banner>{{ $t("sushi") }}</base-banner>
		<div id="secondContent">
			<div id="types">
				<base-card
					v-for="sushi in sushis"
					:key="sushi"
					:image="sushi"
					:text="$t(`sushi${sushi}`)"
					folder="sushi"
				></base-card>
			</div>
			<div id="onePic">
				<img id="chefLogo" src="../assets/chef.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sushis: [1, 2, 3, 4, 5, 6],
			};
		},
		mounted() {
			window.addEventListener("scroll", this.onScroll);
		},
		// beforeUnmount() {
		// 	window.removeEventListener("scroll", this.onScroll);
		// },
		methods: {
			onScroll(e) {
				if (e.target.documentElement.scrollTop > 1000) {
					document.getElementById("chefLogo").classList = "onStage";
					console.log(e.target.documentElement.scrollTop)
				} else {
					document.getElementById("chefLogo").classList ="offStage";
					
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

	#types {
		display: grid;
		margin: 20px 80px;
		gap: 10px 0px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	#onePic {
		display: flex;
		justify-items: center;
		align-items: center;
	}

	#chefLogo {
		max-width: 50%;
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