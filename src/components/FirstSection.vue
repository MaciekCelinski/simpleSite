<template>
	<div id="firstSection">
		<div id="firstContent">
			<base-banner>{{ $t("news") }}</base-banner>
			<div id="content">
				<div id="arrows">
					<img
						id="arrow-left"
						class="arrow"
						src="../assets/arrow-left.png"
						alt=""
						@click="slide"
					/>
				</div>
				<div>
					<img
						id="arrow-right"
						class="arrow"
						src="../assets/arrow-right.png"
						alt=""
						@click="slide"
					/>
				</div>
				<transition appear name="slide">
					<div id="carousel">
						<div v-for="pic in pics" :key="pic">
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
		};
	},
	methods: {
		slide(e) {
			// console.log("e: ", e);
			if (e.srcElement.id.includes("right")) {
				// console.log(
				// 	"translate: ",
				// 	document.getElementById("carousel").style
				// );

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
		},
	},
};
</script>

<style scoped>
#firstSection {
	background: white;
	margin: 20px 0;
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
	/* position: absolute; */
	position: relative;
	/* overflow: scroll; */
}
/* 
.slide-enter-from {
	transform: translateX(-450px);
}
.slide-enter-to {
	transform: translateX(0);
}
.slide-enter-active {
	transition: all 1s ease-in-out;
} */

/* .slide-leave-from {
		transform: translateX(0);
	}
	.slide-leave-to {
		transform: translateX(-450px);
	}
	.slide-leave-active {
		transition: all 5s;
	} */

/* h1 {
	border-bottom: 1px solid lightgray;
	display: inline-block;
	margin: 30px 0 60px 0;
} */

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
	transform: translate(0, 70px);
	right: 0.5%;
}
</style>