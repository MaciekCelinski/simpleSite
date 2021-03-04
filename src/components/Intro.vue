<template>
	<div id="intro">
		<img id="bigLogo" src="../assets/bigLogo.png" alt="" />
		<p id="pHistory">{{ $t("dietHistory") }}</p>
		<a
			id="link"
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
#pHistory {
	font-size: 20px;
	margin: 20px 20% 40px 20%;
}

#link {
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

#link:hover {
	font-size: 17px;
	margin-bottom: 38px;
}

#link:focus {
	outline: none;
}

@media (max-width: 768px) {
	#intro {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	#bigLogo {
		margin: 40px auto;
		max-width: 50%;
	}
	#pHistory {
		display: none;
	}
	#link {
		margin: 0px auto 40px auto;
	}
}
</style>