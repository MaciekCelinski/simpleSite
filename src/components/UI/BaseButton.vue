<template>
	<button :type="[type ? type : none]" class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ["type"],
};
</script>

<style>
.btn {
	outline: none;
	border: none;
}
.btn:hover {
	cursor: pointer;
}
</style>