<template>
    <section id="hero">
        <v-parallax src="@/assets/img/img-pray1.jpg" class="fill-height" height="750">
            <v-overlay value="true" color="primary" absolute>
                <v-row align="center" justify="center" class="text-center">
                    <v-col cols="12" md="12" xl="12">
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="12" xl="12">
                                <h1 class="text-h5 text-md-h3 text-xl-h3 text-capitalize font-weight-light text-center">
                                    Selamat Datang di</h1>
                                <h1 class="text-h5 text-md-h3 text-xl-h3 text-uppercase font-weight-bold text-center">
                                    GEREJA KIBAID JEMAAT Jakarta
                                </h1>
                                <v-btn rounded outlined large dark @click="$vuetify.goTo('#features')"
                                    class="mt-7 text-center">
                                    Selanjutnya
                                    <v-icon class="ml-2">mdi-arrow-down</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-overlay>
        </v-parallax>
    </section>
</template>
  
<script>
export default {
    name: "ChurchBannerComp",
    watch: {
        dialog(value) {
            if (!value) {
                this.pause();
            }
        },
    },
    methods: {
        ready(event) {
            this.player = event.target;
        },
        playing(event) {
            // The player is playing a video.
        }
    }
};
</script>
  
  
  