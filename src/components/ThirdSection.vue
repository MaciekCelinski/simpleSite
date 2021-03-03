<template>
	<div id="thirdSection">
		<base-banner>COVID-19</base-banner>
		<div id="thirdContent">
			<p id="communicate">{{ $t("covidCommunicate") }}</p>
			<!-- <div></div> -->
			<div id="covid-img"><img src="../assets/covid.jpg" alt="" /></div>
			<!-- <div></div> -->
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#thirdSection {
		text-align: center;
	}
	#thirdContent {
		position: relative;
	}

	#covid-img {
		display: flex;
		justify-content: center;
	}

	#covid-img img {
		max-width: 600px;
	}
	#covid-img img:hover {
		transform: scale(1.01);
		transition: transform 0.1s ease;
	}

	#communicate {
		margin: 20px 20% 40px 20%;
	}
</style>