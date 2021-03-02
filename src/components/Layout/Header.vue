<template>
	<header>
		<div id="left-panel">
			<a class="logo" href="#">
				<img src="../../assets/ciop-logo.png" alt="" />
			</a>
			<!-- <ul>
				<li>
					<Button>{{ $t("events") }}</Button>
				</li>
				<li>
					<Button>{{ $t("onlineTools") }}</Button>
				</li>
				<li>
					<Button>{{ $t("services") }}</Button>
				</li>
				<li>
					<Button>{{ $t("bhp") }}</Button>
				</li>
				<li>
					<Button>{{ $t("aboutUs") }}</Button>
				</li>
				<li>
					<Button>{{ $t("contact") }}</Button>
				</li>
			</ul> -->
		</div>
		<div id="right-panel">
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
		/* border-bottom: 1px solid rgba(0, 0, 0, 0.12); */
		/* position: fixed;
					width: 100%;
					max-width: 1580px;
					background: white; */
	}

	header #left-panel {
		margin: auto 0;
		display: flex;
	}

	header #left-panel .logo {
		width: 15rem;
		display: flex;
	}

	header #left-panel .logo img {
		max-width: 100%;
		margin: auto;
		max-height: 30px;
	}

	/* header #left-panel ul {
		display: flex;
		list-style-type: none;
	}

	header #left-panel ul li {
		padding: 3px 10px;
		border-right: 1px solid lightgray;
	}

	header #left-panel ul li:last-child {
		border-right: none;
	} */

	header #right-panel {
		display: flex;
		margin: auto 10px auto auto;
	}

	.btn {
		background-color: white;
		border: none;
		border-bottom: 1px solid white;
		min-width: 135px;
		font-family: "Lato";
		font-size: 16px;
		cursor: pointer;
		opacity: 80%;
		/* transition: border-bottom 0.2s linear; */
	}

	.btn:hover,
	.btn:active,
	.btn:focus {
		outline: none;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.logo {
			width: 10rem;
		}
	}
</style>