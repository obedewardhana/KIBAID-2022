<template>
  <section id="hero">
    <v-parallax src="@/assets/img/img-pray1.jpg" class="fill-height" height="750" style="margin-bottom:-150px">
      <v-overlay value="true" color="primary" absolute>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="12" xl="12">
            <v-row align="center" justify="center">
              <v-col cols="12" md="12" xl="12">
                <h1 class="text-h5 text-md-h3 text-xl-h2 font-weight-light text-center">Selamat Datang di</h1>
                <h1 class="text-h5 text-md-h3 text-xl-h2 font-weight-bold text-center">
                  SINODE GEREJA KIBAID
                </h1>
                <v-btn rounded outlined large dark @click="$vuetify.goTo('#features')" class="mt-7 text-center">
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
    <v-container id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="12" >
          <v-card :elevation="0" color="gray" class="py-8 px-3 overflow-hidden" tile style="position:relative;">
            <v-row>
              <v-col cols="12" md="6" xl="6" class="pc-0">
                <v-card-title class="text-h5 font-weight-bold primary--text" style="z-index:2;position:relative;">
                  TUJUAN KAMI
                </v-card-title>
                <v-card-text class="primary--text" style="z-index:2;position:relative;">
                  <p>"Mewujudkan panggilannya untuk menyembah, memuliakann Allah, memberitakan Injil dan memberdayakan
                    warga jemaat"</p>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6" xl="6">
                <v-img src="@/assets/img/icon-features.png" class="feature-img" contain/>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HomeSectionComp",
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


