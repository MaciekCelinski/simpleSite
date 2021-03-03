<template>
	<div id="mottoDiv">
		<p id="motto">
			<l>{{ motto }}</l>
		</p>
		<h4>{{ mottoAuthor }}</h4>
	</div>
</template>

<script>
	export default {
		props: ["motto", "mottoAuthor"],
	};
</script>

<style scoped>
	#mottoDiv {
		text-align: center;
		padding: 50px 0;
		background: rgb(243, 243, 243);
		color:rgb(148, 4, 136);

	}
	#motto {
		font-size: 24px;
		font-style: italic;
        font-weight: 100;
	}

    h4 {
        font-weight: 600;
    }
</style>