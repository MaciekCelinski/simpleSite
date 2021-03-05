<template>
	<div id="thirdSection">
		<base-banner>{{ $t("ecoFarming") }}</base-banner>
		<div id="thirdContent">
			<p id="communicate">{{ $t("ecoCommunicate") }}</p>

			<div id="main-img">
				<img
					@click="showModal = true"
					src="../assets/cows2min.jpg"
					alt=""
				/>
			</div>

			<base-modal v-if="showModal" @close="showModal = false">
				<div id="slot-img">
					<img id="modalPic" src="../assets/cows2.jpg" alt="" />
				</div>
			</base-modal>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showModal: false,
			};
		},
	};
</script>

<style scoped>
	#thirdSection {
		text-align: center;
		margin-bottom: 50px;
	}
	#thirdContent {
		position: relative;
	}

	#main-img {
		display: flex;
		justify-content: center;
	}

	#main-img img {
		max-width: 1000px;
		border: 1px solid white;
		border-radius: 50%;
	}
	#main-img img:hover {
		transform: scale(1.01);
		transition: transform 0.1s ease;
		cursor: pointer;
	}

	#communicate {
		font-size: 24px;
		margin: 20px 20% 40px 20%;
	}

	#slot-img {
		display: block;
	}

	#slot-img img {
		max-width: 100%;
		margin: 10%;
		border: 1px solid grey;
		border-radius: 10px;
		box-shadow: 0 0 20px 20px grey;
	}

	@media (max-width: 768px) {

		#slot-img img {
			max-width: 90%;
			margin: 5%;
			border: 1px solid grey;
			border-radius: 10px;
			box-shadow: 0 0 20px 20px grey;
		}
	}
</style>