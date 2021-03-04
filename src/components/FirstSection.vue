<template>
	<div id="firstSection">
		<div id="firstContent">
			<base-banner>{{ $t("news") }}</base-banner>
			<div id="content">
				<div id="arrows">
					<div>
						<img
							id="arrow-left"
							class="arrow"
							src="../assets/arrow.png"
							alt=""
							@click="slide"
						/>
					</div>

					<div>
						<img
							id="arrow-right"
							class="arrow"
							src="../assets/arrow.png"
							alt=""
							@click="slide"
						/>
					</div>
				</div>
				<transition appear name="slide">
					<div id="carousel">
						<div
							class="singleCard"
							:class="[
								pic === selectedPic ? 'active' : 'notActive',
							]"
							v-for="pic in pics"
							:key="pic"
						>
							<base-card :image="pic" folder="news"></base-card>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
export default {
	components: { BaseCard },
	data() {
		return {
			pics: [1, 2, 3, 4, 5, 6, 7, 8],
			selectedPic: 3,
		};
	},
	methods: {
		slide(e) {
			if (screen.width > 768) {
				if (e.srcElement.id.includes("right")) {
					document.getElementById("carousel").style.transition =
						"all 2s ease-in-out";
					document.getElementById("carousel").style.transform =
						"translateX(-450px)";
				} else {
					document.getElementById("carousel").style.transition =
						"all 2s ease-in-out";
					document.getElementById("carousel").style.transform =
						"translateX(0)";
				}
			} else {
				document.getElementById("carousel").style.transform =
					"translateX(0)";
				if (e.srcElement.id.includes("right") && this.selectedPic < 8) {
					this.selectedPic += 1;
				}
				if (e.srcElement.id.includes("left") && this.selectedPic > 1) {
					this.selectedPic -= 1;
				}
			}
		},
	},
};
</script>

<style scoped>
#firstSection {
	background: white;
	padding: 0 0 60px 0;
}
#firstContent {
	margin: 0 20px;
	overflow: hidden;
	text-align: center;
}

#content {
	max-width: 1560px;
	position: relative;
}

#carousel {
	display: flex;
	position: relative;
}

#arrows {
	display: flex;
	position: relative;
}

.arrow {
	width: 50px;
	position: absolute;
	opacity: 0.3;
	z-index: 2;
}

.arrow:hover {
	opacity: 0.5;
}

#arrow-left {
	transform: translate(5px, 70px);
}

#arrow-right {
	transform: translate(0, 70px) scale(-1, 1);
	right: 0.5%;
}

@media (max-width: 768px) {
	/* #arrows {
		display: none;
	} */
	#carousel {
		display: flex;
		flex-direction: row;
		margin: auto;
		align-self: center;
	}
	.singleCard {
		margin: auto;
	}
	.active {
		display: block;
	}
	.notActive {
		display: none;
	}
}
</style>