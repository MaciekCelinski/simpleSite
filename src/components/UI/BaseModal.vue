<template>
	<div @click="toggleModal" id="overflow">
		<div id="modal"><slot></slot></div>
		<div id="closeTag"><h1>X</h1></div>
	</div>
</template>

<script>
	export default {
		emits: ["close"],
		methods: {
			toggleModal(e) {
				// console.log("e.target ", e.target.tagName);
				if (e.target.tagName === "H1") {
					this.$emit("close", false);
				}
			},
		},
	};
</script>

<style scoped>
	#overflow {
		position: fixed;
		overflow: auto;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 2;
		animation: slideModal 1s ease-in;
	}

	#modal {
		display: block;
		z-index: 99;
		animation: slideModal 1s ease-in;
	}

	@keyframes slideModal {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	h1 {
		border: none;
		opacity: 0.7;
	}

	h1:hover {
		font-size: 2.2em;
		cursor: pointer;
	}

	#closeTag {
		color: whitesmoke;
		border: none;
		transform: translateY(-200px);
	}

	#modal {
		display: block;
	}

	@media (max-width: 768px) {
		#overflow {
			display: flex;
			flex-direction: column;
		}
		#modal {
			margin-top: 30%;
		}
		#closeTag {
			color: whitesmoke;
			border: none;
			transform: translateY(0px);
		}
	}
</style>