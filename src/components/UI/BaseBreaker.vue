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
	margin: 20px 0;
}

#breaker img {
	height: 50px;
}

#breaker img:hover {
	animation: jump 1s forwards ease-in-out;

}

@keyframes jump {
	0% {
		transform: translateY(-0px);
	}
	25% {
		transform: translateY(-10px);
	}
		50% {
		transform: translateY(0px);
	}
		75% {
		transform: translateY(-10px);
	}
		100% {
		transform: translateY(0px);
	}
}
</style>