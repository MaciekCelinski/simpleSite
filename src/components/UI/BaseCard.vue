<template>
	<div id="card">
		<div id="card-container">
			<img :src="picture" alt="" />
			<p v-if="text">{{ text }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["image", "folder", "text"],
		computed: {
			picture() {
				return require(`../../assets/${this.folder}/${this.image}.jpg`);
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
		transform: scale(1.01);
		transition: all 0.2s ease;
	}

	#card-container {
		position: relative;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	img {
		height: 200px;
		width: 100%;
	}

	p {
		color: white;
		position: absolute;
		width: 200px;
		top: 150px;
		margin: auto;
		font-weight: 600;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		z-index: 2;
	}
</style>