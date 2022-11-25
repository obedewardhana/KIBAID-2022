<template>
  <section id="hero">
    <v-parallax src="@/assets/img/img-pray1.jpg" height="750">
      <v-overlay value="true" color="primary" absolute>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="12" xl="12">
            <v-row align="center" justify="center">
              <v-col cols="12" md="12" xl="12">
                <h1 class="text-h5 text-md-h3 text-xl-h2 font-weight-light mb-4 text-center">Selamat Datang di</h1>
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
        <v-col cols="12">
          <v-card :elevation="0" color="gray" class="py-8 px-3 overflow-hidden mx-5" tile style="margin-top:-140px;position:relative;">
            <v-row>
              <v-col cols="12" md="6" xl="6">
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
  data() {
    return {
      dialog: false,
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
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
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;

  .triangle {
    transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
