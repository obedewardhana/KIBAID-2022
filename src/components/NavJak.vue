<template>
    <div>
  
      <v-navigation-drawer v-model="drawer" app temporary color="secondary">
        <v-list>
          <v-list-item @click.stop="$router.push('/jakarta/').catch(() => { });" class="brand-logo">
            <v-list-item-avatar>
              <img src="@/assets/img/logo-kibaid.png" alt="Logo" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title text-uppercase white--text hover-text">Gereja Kibaid</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
  
        <v-divider />
        <template v-if="this.$route.name == '' || this.$route.name == 'Home'">
          <v-list dense>
            <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
              <v-list-item-icon class="justify-center white--text hover-text" style="margin-right:10px!important">
                <v-icon class="white--text hover-text">{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitile-1 white--text hover-text">{{
                    text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="mailto:admin@sinodekibaid.org">
              <v-list-item-icon class="justify-center white--text hover-text" style="margin-right:10px!important">
                <v-icon class="white--text hover-text">mdi-email-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitile-1 white--text hover-text">
                  Kontak
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
        <template v-else>
          <v-list dense>
            <v-list-item v-for="([icon, text, link], i) in links" :key="i" link  @click="goTo(link)">
              <v-list-item-icon class="justify-center white--text hover-text" style="margin-right:10px!important">
                <v-icon class="white--text hover-text">{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitile-1 white--text hover-text">{{
                    text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="mailto:admin@sinodekibaid.org">
              <v-list-item-icon class="justify-center white--text hover-text" style="margin-right:10px!important">
                <v-icon class="white--text hover-text">mdi-email-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="subtitile-1 white--text hover-text">
                  Kontak
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
  
      </v-navigation-drawer>
  
  
      <v-app-bar app :color="color" :flat="flat" dark class="px-0 px-md-15 px-xl-15" style="" :class="{ expand: flat }" height="100">
        <v-container class="px-0 py-0">
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center">
                <v-btn :ripple="false" width="200" large depressed link
                  @click.stop="$router.push('/jakarta/').catch(() => { });" color="transparent" elevation="0" class="no-hover  brand-name"
                  rounded>
                  <v-toolbar-title class="d-flex align-center" style="width:200px">
                    <v-img src="@/assets/img/logo-kibaid.png" max-width="70px" width="100%" height="100%"
                      object-fit="contain" class="my-auto mr-3" />
                    <h1 class="title text-uppercase" style="line-height:1.2!important">Gereja Kibaid</h1>
                  </v-toolbar-title>
                </v-btn>
                <v-spacer />
                <template v-if="this.$route.name == '' || this.$route.name == 'Home'">
                  <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
                  <div v-else>
                    <v-btn class="no-hover" text @click="$vuetify.goTo('#hero')">
                      <span class="mr-2 hover-text">Home</span>
                    </v-btn>
                    <v-btn class="no-hover" text @click="$vuetify.goTo('#features')">
                      <span class="mr-2 hover-text">Tentang Kami</span>
                    </v-btn>
                    <v-btn class="no-hover" text @click="$vuetify.goTo('#infographic')">
                      <span class="mr-2 hover-text">Gereja</span>
                    </v-btn>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="jakarta/download">
                        <span class="mr-2">Download</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" text @click="$vuetify.goTo('#feed')">
                      <span class="mr-2 hover-text">informasi</span>
                    </v-btn>
                    <v-btn class="no-hover" rounded outlined text href="mailto:admin@sinodekibaid.org">
                      <span class="mr-2 hover-text">Kontak</span>
                    </v-btn>
                  </div>
                </template>
                <template v-else>
                  <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
                  <div v-else>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="/jakarta">
                        <span class="mr-2">Home</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="/jakarta/about">
                        <span class="mr-2">Tentang Kami</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="/jakarta/church">
                        <span class="mr-2">Gereja</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="/jakarta/download">
                        <span class="mr-2">Download</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" text>
                      <router-link class="nav-link white--text hover-text" to="/jakarta/news">
                        <span class="mr-2">informasi</span>
                      </router-link>
                    </v-btn>
                    <v-btn class="no-hover" rounded outlined text href="mailto:admin@sinodekibaid.org">
                      <span class="mr-2">Kontak</span>
                    </v-btn>
                  </div>
                </template>
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
        ["mdi-church-outline", "Gereja", "#infographic"],
        ["mdi-download", "Download", "#download"],
        ["mdi-newspaper", "informasi", "#feed"],
      ],
      links: [
        ["mdi-home-outline", "Home", "home"],
        ["mdi-information-outline", "Tentang Kami", "about"],
        ["mdi-church-outline", "Gereja", "church"],
        ["mdi-download", "Download", "download"],
        ["mdi-newspaper", "informasi", "news"],
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
      checkRoute() {
        console.log(this.$route.name);
      },
      goTo(id) {
        this.$router.push({
          path: `/${id}`
        })
      }
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
      this.checkRoute();
      this.onResize();
      window.addEventListener("resize", this.onResize, { passive: true });
    },
  };
  </script>
  