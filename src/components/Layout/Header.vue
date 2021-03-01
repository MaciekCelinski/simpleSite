<template>
	<header>
		<div id="right-panel">
			<a class="logo" href="#">
				<img src="../../assets/ciop-logo.png" alt="" />
			</a>
		</div>
		<div id="left-panel">
			<ul>
				<li><Button>{{ $t("scientificActivity") }}</Button></li>
				<li>
					<Button>{{ $t("services") }}</Button>
				</li>
				<li><Button>{{ $t("aboutUs") }}</Button></li>
			</ul>
			<lang-switcher />
		</div>
	</header>
</template>

<script>
import LangSwitcher from "../UI/LangSwitcher.vue";
export default {
	components: { LangSwitcher },
};
</script>

<style scoped>
header {
	height: 60px;
	display: flex;
	margin: auto 10px;
}

header #right-panel {
	margin: auto 0;
}

header #right-panel .logo {
	width: 15rem;
	display: flex;
}

header #right-panel .logo img {
	width: 100%;
	margin: auto;
}

header #left-panel {
	display: flex;
	margin:  auto 10px auto auto;
}

header #left-panel ul {
	display: flex;
	list-style-type: none;
}

header #left-panel ul li {
	margin: auto 3px
}

header #left-panel ul li:last-child {
	margin-right: 35px;
}

@media (max-width: 768px) {
	.logo {
		width: 10rem;
	}
}
</style>