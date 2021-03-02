<template>
	<div id="breaker">
		<img :src="sign" alt="" />
	</div>
</template>

<script>
export default {
	props: ["symbol"],
	computed: {
		sign() {
			return require(`../../assets/${this.symbol}.png`);
		},
	},
};
</script>

<style>
#breaker {
	display: block;
	text-align: center;
	margin: 40px 0 20px 0;
}

#breaker img {
	height: 30px;
}
</style>