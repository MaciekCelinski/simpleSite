import { createApp } from "vue";
import { createI18n } from "vue-i18n";

// base components
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

// components
import App from "./App.vue";

// languages
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const messages = {
	en,
	pl,
};

const i18n = createI18n({
	locale: "pl",
	fallbackLocale: "pl",
	localeDir: "locales",
	messages,
	// enableInSFC: true
});

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);

app.use(i18n);
app.mount("#app");
