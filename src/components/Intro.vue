<template>
	<div id="intro">
		<img id="bigLogo" src="../assets/bigLogo.png" alt="" />
		<p id="p70">{{ $t("dietHistory") }}</p>
		<a
			id="link70"
			href="https://visvitalis.com.pl/blog/rzyjaciele-zwierzat-wybieraja-eko/"
			target="_blank"
			>{{ $t("learnMore") }}</a
		>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#intro {
		width: 100%;
		text-align: center;
		background: rgb(243, 243, 243);
	}
	#bigLogo {
		margin-top: 100px;
		margin-bottom: 20px;
		max-height: 300px;
	}
	#p70 {
		font-size: 20px;
		margin: 20px 20% 40px 20%;
	}

	#link70 {
		background: #0066cc;
		color: white;
		border: 1px solid #0066cc;
		padding: 10px;
		font-size: 16px;
		margin-bottom: 40px;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
	}

	#link70:hover {
		font-size: 17px;
		margin-bottom: 38px;
	}

	#link70:focus {
		outline: none;
	}
</style>