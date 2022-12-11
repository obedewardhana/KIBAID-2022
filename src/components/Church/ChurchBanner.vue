<template>
    <section id="">
        <video-background v-for="(ch, idx) in church" :key="idx" :src="ch.src" :poster="ch.poster"
            style="max-height: 450px; height: 100vh;">
            <v-overlay value="true" color="primary" absolute style="z-index:1;">
                <v-row align="center" justify="center" class="text-center mt-4">
                    <v-col cols="12" md="12" xl="12">
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="12" xl="12">
                                <h1 class="text-h5 text-md-h3 text-xl-h3 font-weight-light text-center">Selamat Datang
                                    di</h1>
                                <h1 class="text-h5 text-md-h3 text-xl-h3 font-weight-bold text-center">
                                    {{ ch.title }}
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-overlay>
        </video-background>
    </section>
</template>
  
<script>
import Vue from 'vue'
import VideoBackground from 'vue-responsive-video-background-player'
Vue.component('video-background', VideoBackground);
export default {
    name: "ChurchBannerComp",
    props: {
        church: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
    }
};
</script>
  
  
  