<template>
	<div id="mottoDiv">
		<p id="motto">
			<l>"{{ motto }}"</l>
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
		margin: 50px 0;

	}
	#motto {
		font-size: 24px;
		font-style: italic;
        font-weight: 100;
	}

    h4 {
        font-weight: 400;
    }
</style>