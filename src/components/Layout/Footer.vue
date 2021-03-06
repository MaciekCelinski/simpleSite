<template>
	<div id="footer">
		<div class="contactUs">
			<h3>{{ $t("contactUs") }}</h3>
			<base-button id="contactButton" @click="showModal = true">{{
				$t("contactForm")
			}}</base-button>
		</div>
		<div class="legalRights"><h3>&copy; 2021 Maciej Celiński</h3></div>
		<div class="followUs">
			<h3>{{ $t("followUs") }}</h3>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/github.png" alt=""
			/></a>
			<a
				href="https://www.linkedin.com/in/maciej-celi%C5%84ski-4a0638b1/"
				target="_blank"
				><img class="icon" src="../../assets/linkedin.png" alt=""
			/></a>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/instagram.png" alt=""
			/></a>
			<a
				href="https://github.com/MaciekCelinski/simpleSite"
				target="_blank"
				><img class="icon" src="../../assets/facebook.png" alt=""
			/></a>
		</div>
	</div>
	<contact-modal @close="showModal = false" v-if="showModal" />
</template>

<script>
import ContactModal from "../ContactModal.vue";

export default {
	components: { ContactModal },
	data() {
		return {
			showModal: false,
		};
	},
};
</script>

<style scoped>
#footer {
	background: rgb(243, 243, 243);
	height: 180px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.icon {
	max-height: 40px;
	margin: 0 5px;
	cursor: pointer;
}

#contactButton {
	padding: 5px;
	border: none;
	border-bottom: 1px solid blue;
	color: blue;
	font-family: "Lato";
	font-size: 16px;
}

/* #contactButton:hover {
	background-color: rgb(117, 0, 98);
	transform: scale(1.05);
	transition: all 0.1s ease-in;
} */

.contactUs,
.followUs,
.legalRights {
	margin: auto;
	text-align: center;
}

@media (max-width: 768px) {
	#footer {
		background: rgb(243, 243, 243);
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: none;
		margin-bottom: 20px;
	}
	.legalRights {
		display: none;
	}
}
</style>