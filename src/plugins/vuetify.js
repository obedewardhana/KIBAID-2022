import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {        
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#042F4D",
                secondary: "#1B4562",
                bluesea: "#036280",
                bluelighter:"#82BECF",
                accent: "#458CA4",
                gray: "#E4EBE7",
                graylight: "#ecf1ee",
                grayrefuge:"#617D82",
                white: "#ffffff",
            }
        }
    }
});
