import { createApp } from "vue";
import { createI18n } from "vue-i18n";

// base components
import BaseBanner from "./components/UI/BaseBanner.vue";
import BaseBreaker from "./components/UI/BaseBreaker.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseMotto from "./components/UI/BaseMotto.vue";

// components
import App from "./App.vue";

// directives


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

app.component("BaseBanner", BaseBanner);
app.component("BaseBreaker", BaseBreaker);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseMotto", BaseMotto);


app.use(i18n);
app.mount("#app");
