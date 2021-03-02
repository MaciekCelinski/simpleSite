<template>
	<div id="firstSection">
		<div id="firstContent">
			<h2>{{ $t("news") }}</h2>
			<div>
				<div id="arrows">
					<img
						id="arrow-left"
						class="arrow"
						src="../../assets/arrow.png"
						alt=""
						@click="sayHello"
					/>
				</div>
				<div>
					<img
						id="arrow-right"
						class="arrow"
						src="../../assets/arrow.png"
						alt=""
						@click="sayHello"
					/>
				</div>
				<transition appear name="slide">
					<div id="carousel">
						<div v-for="pic in pics" :key="pic">
							<base-card :image="pic"></base-card>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseCard from "../UI/BaseCard.vue";
	export default {
		components: { BaseCard },
		data() {
			return {
				pics: [1, 2, 3, 4, 5, 6, 7, 8],
			};
		},
		methods: {
			sayHello() {
				console.log("Hello");
			},
		},
	};
</script>

<style scoped>
	#firstSection {
		background: white;
	}
	#firstContent {
		margin: 20px;
		overflow: hidden;
	}
	#carousel {
		display: flex;
		/* position: absolute; */
		position: relative;
		/* overflow: scroll; */
	}

	.slide-enter-from {
		transform: translateX(-450px);
	}
	.slide-enter-to {
		transform: translateX(0);
	}
	.slide-enter-active {
		transition: all 1s ease-in-out;
	}

	/* .slide-leave-from {
														transform: translateX(0);
													}
													.slide-leave-to {
														transform: translateX(-450px);
													}
													.slide-leave-active {
														transition: all 5s;
													} */

	h2 {
		border-bottom: 1px solid lightgray;
		display: inline-block;
	}

	.arrow {
	opacity : 0.3
	}

	.arrow:hover {
		opacity: 0.5
	}

	#arrows {
		display: flex;
	}

	#arrow-left {
		width: 50px;
		position: absolute;
		transform: translate(10px, 70px);
		z-index: 2;
	}



	#arrow-right {
		width: 50px;
		position: absolute;
		transform: translate(105px, 70px);
		left: 82%;
		z-index: 2;
		rotate: 180deg;
	}
</style>