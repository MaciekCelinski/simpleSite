<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style>
.btn {
	background-color: white;
	border: none;
	min-width: 100px;
	height: 40px;
	font-family: "Roboto";
	font-size: 16px;
	cursor: pointer;
	opacity: 80%;
	/* transition: border-bottom 0.2s linear; */
}

.btn:hover,
.btn:active,
.btn:focus {
	font-weight: 600;
	outline: none;
	animation: showBorder 0.3s linear forwards;
}
@keyframes showBorder {
	0% {
		border-bottom: 1px solid white;
	}
	100% {
		border-bottom: 1px solid lightgray;
	}
}
</style>