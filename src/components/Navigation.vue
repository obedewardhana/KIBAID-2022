<template>
  <div>

    <v-navigation-drawer v-model="drawer" app temporary dark>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo-kibaid.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title text-uppercase">Sinode</v-list-item-title>
            <v-list-item-title class="title text-uppercase">Kibaid</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
                text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app :color="color" :flat="flat" dark class="px-0 px-md-15 px-xl-15" style="" :class="{ expand: flat }">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center">
              <v-toolbar-title class="d-flex">
                <v-img src="@/assets/img/logo-kibaid.png" max-width="50px" width="100%" height="100%"
                  object-fit="contain" class="my-auto mr-3" />
                <h1 class="title text-uppercase">Sinode <br /> Kibaid</h1>
              </v-toolbar-title>
              <v-spacer />
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
              <div v-else>
                <v-btn text @click="$vuetify.goTo('#hero')">
                  <span class="mr-2">Home</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#features')">
                  <span class="mr-2">Tentang Kami</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#church')">
                  <span class="mr-2">Gereja</span>
                </v-btn>
                <v-btn text @click="$vuetify.goTo('#news')">
                  <span class="mr-2">Kabar</span>
                </v-btn>
                <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
                  <span class="mr-2">Kontak</span>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Tentang Kami", "#features"],
      ["mdi-church-outline", "Gereja", "#church"],
      ["mdi-newspaper", "Kabar", "#news"],
      ["mdi-email-outline", "Kontak", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
