<template>
	<base-modal>
		<form class="form-control" @submit.prevent="sendEmail">
			<div id="contactUs">
				<h1>{{ $t("contactUs") }}</h1>
				<h2 id="finalMessage" v-if="finalMessageValid">
					{{ $t("noEmail") }}
				</h2>
			</div>

			<div class="form-element">
				<label for="name">{{ $t("name") }}</label>
				<input type="text" :placeholder="$t('name')" v-model="name" />
				<p v-if="!nameValid" class="error" id="name-error">
					{{ $t("errorNameField") }}
				</p>
			</div>
			<div class="form-element">
				<label for="email">{{ $t("email") }}</label>
				<input type="text" :placeholder="$t('email')" v-model="email" />
				<p v-if="!emailValid" class="error" id="email-error">
					{{ $t("errorEmailField") }}
				</p>
			</div>
			<div class="form-element">
				<label for="message">{{ $t("message") }}</label>
				<textarea
					rows="6"
					:placeholder="$t('message')"
					v-model="message"
				/>
				<p v-if="!messageValid" class="error" id="message-error">
					{{ $t("errorMessageField") }}
				</p>
			</div>
			<base-button type="submit" id="send-btn">Send</base-button>
		</form>
	</base-modal>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			nameValid: true,
			email: "",
			emailValid: true,
			message: "",
			messageValid: true,
			finalMessageValid: false,
		};
	},
	methods: {
		sendEmail() {
			if (this.name.length === 0 || this.name.length < 3) {
				this.nameValid = false;
			} else {
				this.nameValid = true;
			}

			const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if (!emailRegex.test(this.email.toLowerCase())) {
				this.emailValid = false;
			} else {
				this.emailValid = true;
			}

			if (this.message.length === 0) {
				this.messageValid = false;
			} else {
				this.messageValid = true;
			}

			if (this.nameValid && this.emailValid && this.messageValid) {
				const finalEmail = {
					name: this.name,
					email: this.email,
					message: this.message,
				};

				console.log("Email details: ", finalEmail);

				this.name = "";
				this.email = "";
				this.message = "";
				this.finalMessageValid = true;
			}
		},
	},
};
</script>

<style scoped>
.form-control {
	max-width: 100%;
	margin: 10% 20%;
	border: 1px solid grey;
	border-radius: 10px;
	background-color: white;
	padding: 3rem 5rem;
}

#contactUs {
	text-align: center;
}

.form-element {
	display: flex;
	flex-direction: column;
	font-family: "Lato" !important;
}

input,
textarea {
	font-family: "Lato" !important;
}
.form-element label {
	margin: 15px 0;
	font-weight: 600;
	max-height: 40px;
}
.form-element input {
	min-height: 40px;
}

.error {
	color: red;
	font-weight: 600;
}

#send-btn {
	display: block;
	margin: auto;
	margin-top: 10px;
	margin-right: 0px;
	padding: 16px 40px;
	color: white;
	border-radius: 5px;
	background-color: #ff0000;
	text-align: center;
	font-size: 16px;
}

#send-btn:active {
	transform: translateY(1px);
}

#finalMessage {
	color: green;
}
</style>