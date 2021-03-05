<template>
	<div id="footer">
		<div class="contactUs">
			<h3>{{ $t("contactUs") }}</h3>

		</div>
		<div class="followUs">
			<h3>Follow us</h3>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/github.png" alt=""
			/></a>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/linkedin.png" alt=""
			/></a>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/instagram.png" alt=""
			/></a>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/facebook.png" alt=""
			/></a>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	#footer {
		background: rgb(243, 243, 243);
		height: 180px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.icon {
		max-height: 40px;
		margin: 0 5px;
		cursor: pointer;
	}

	.contactUs {
		margin: auto;
	}

	.followUs {
		margin: auto;
	}
</style>