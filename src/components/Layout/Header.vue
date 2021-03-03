<template>
	<header>
		<div id="left-panel">
			<a class="logo" href="#">
				<img src="../../assets/smallLogo.png" alt="" />
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
			<form id="searchForm">
				<input
					id="searchInput"
					type="text"
					:placeholder="$t('search')"					
					name="search"
				/>
				<base-button type="submit"
					><img id="searchIcon" src="../../assets/search.png" alt=""
				/></base-button>
			</form>
			<lang-switcher />
		</div>
	</header>
</template>

<script>
	import BaseButton from "../UI/BaseButton.vue";
	import LangSwitcher from "../UI/LangSwitcher.vue";
	export default {
		components: { LangSwitcher, BaseButton },
	};
</script>

<style scoped>
	header {
		height: 60px;
		display: flex;
		margin: auto;
		/* border-bottom: 1px solid rgba(0, 0, 0, 0.12);
		position: fixed;
							width: 100%;
							max-width: 1600px;
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
		max-height: 40px;
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
		height: 30px;
		/* min-width: 135px;
			font-family: "Lato";
			font-size: 16px;
			cursor: pointer;
			opacity: 80%; */
		/* transition: border-bottom 0.2s linear; */
	}

	.btn:hover,
	.btn:active,
	.btn:focus {
		outline: none;
		font-weight: 600;
	}

	#searchForm {
		padding: 5px 30px 0 0;
		display: flex;
	}

	#searchInput {
		height: 30px;
		border: none;
		border-bottom: 1px solid lightgray;
	}

	#searchInput:hover,
	#searchInput:active,
	#searchInput:focus {
		outline: none;
		font-weight: 600;
	}

	#searchIcon {
		width: 25px;
		padding: 5px
	}

	@media (max-width: 768px) {
		.logo {
			width: 10rem;
		}
	}
</style>