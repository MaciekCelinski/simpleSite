<template>
	<div id="card">
		<div id="card-container">
			<img :src="picture" alt="" />
			<!-- <div id="slot">
				<slot></slot>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		props: ["image"],
		computed: {
			picture() {
				console.log("this.image: ", this.image);
				return require(`../../assets/news/${this.image}.jpg`);
			},
		},
	};
</script>

<style scoped>
	#card {
		width: 240px;
		height: 200px;
		border: 1px solid lightgray;
		margin-right: 10px;
		opacity: 0.6;
		transition: opacity 0.25s ease;
	}

	#card:hover {
		opacity: 1;
	}

	#card-container {
		position: relative;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	/* #slot {
						font-size: 24px;
						font-weight: 600;
						position: absolute;
						top: 40%;
						left: 20%;
								} */
	img {
		height: 200px;
	}
</style>