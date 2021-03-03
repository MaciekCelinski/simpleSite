<template>
	<div id="thirdSection">
		<base-banner>COVID-19</base-banner>
		<div id="thirdContent">
			<p id="communicate">{{ $t("ecoCommunicate") }}</p>
			<!-- <div></div> -->
			<div id="main-img"><img src="../assets/cows2.jpg" alt="" /></div>
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
}
#main-img img:hover {
	transform: scale(1.01);
	transition: transform 0.1s ease;
}

#communicate {
	font-size: 24px;
	margin: 20px 20% 40px 20%;
}
</style>