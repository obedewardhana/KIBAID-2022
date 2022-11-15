import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#042F4D",
                secondary: "#1B4562",
                accent: "#458CA4",
                gray:"#E4EBE7",
            }
        }
    }
});
