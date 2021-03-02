<template>
	<!-- <select v-model="$i18n.locale">
		<option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
			{{ lang }}
		</option>
	</select> -->

	<div v-if="$i18n.locale === 'en'">
		<input
			id="english"
			class="flag"
			type="radio"
			value="pl"
			name="pl"
			v-model="$i18n.locale"
		/>
		<label for="english">
			<img src="../../assets/poland.png" alt="" />
		</label>
	</div>
	<div v-else>
		<input
			id="polish"
			class="flag"
			type="radio"
			value="en"
			name="en"
			v-model="$i18n.locale"
		/>
		<label for="polish">
			<img src="../../assets/united-kingdom.png" alt="" />
		</label>
	</div>
</template>

<script>
	export default {
		name: "LangSwitcher",
		data() {
			return {
				langs: ["pl", "en"],
			};
		},
	};
</script>

<style scoped>
	div {
		height: auto;
		margin: auto 10px auto 0;
		display: flex;
	}
	input {
		display: none;
	}
	label {
		cursor: pointer;
		height: 100%;
		width: 100%;
		padding-top: 5px;
	}
	label img {
		height: 100%;
		min-width: 30px;
	}
	/* @media (max-width: 768px) {
		img {
			width: 40px;
		}
	} */
</style>