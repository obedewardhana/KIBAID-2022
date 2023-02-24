<template>
  <v-footer color="gray" class="pt-10 pb-10">
    <v-container>
      <v-row>
        <v-col cols="10" sm="4" md="4" xl="4" class="py-0 mb-sm-8 order-3 order-sm-1 order-md-1 order-xl-1 mx-auto">
          <v-list color="transparent">
            <v-list-item class="justify-center justify-md-start justify-xl-start brand-logo">
              <v-list-item-avatar>
                <img src="@/assets/img/logo-kibaid.png" alt="Logo" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title text-uppercase primary--text font-weight-bold my-0"
                  style="line-height:1.2!important">Sinode Gereja Kibaid
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="justify-center justify-md-start justify-xl-start">
              <span class=" mr-2 primary--text text-small">
                © {{ new Date().getFullYear() }} — <strong>KIBAID</strong>
              </span>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="4" md="4" xl="4" class="order-1 order-sm-2 order-md-2 order-xl-2 mb-8">
          <v-row>
            <div class="primary--text text--uppercase text-h6 pl-4 mb-3">QUICK LINKS</div>
          </v-row>
          <template v-if="this.$route.name == '' || this.$route.name == 'Home'">
            <v-row class="flex-column flex-wrap">
              <v-btn class="justify-start no-hover hover-text" text @click="$vuetify.goTo('#hero')">
                <span class="mr-2 primary--text text-capitalize">Home</span>
              </v-btn>
              <v-btn class="justify-start no-hover hover-text" text @click="$vuetify.goTo('#features')">
                <span class="mr-2 primary--text text-capitalize">Tentang Kami</span>
              </v-btn>
              <v-btn class="justify-start no-hover hover-text" text @click="$vuetify.goTo('#infographic')">
                <span class="mr-2 primary--text text-capitalize">Gereja</span>
              </v-btn>
              <v-btn class="justify-start no-hover hover-text" text @click="$vuetify.goTo('#feed')">
                <span class="mr-2 primary--text text-capitalize">informasi</span>
              </v-btn>
              <v-btn class="justify-start no-hover hover-text" text href="mailto:admin@sinodekibaid.org">
                <span class="mr-2 primary--text text-capitalize">Kontak</span>
              </v-btn>
            </v-row>
          </template>
          <template v-else>
            <v-row class="flex-column flex-wrap">
              <v-btn class="justify-start no-hover " text>
                <router-link class="nav-link primary--text hover-text" to="/home">
                  <span class="mr-2 text-capitalize">Home</span>
                </router-link>
              </v-btn>
              <v-btn class="justify-start no-hover " text>
                <router-link class="nav-link primary--text hover-text" to="/about">
                  <span class="mr-2 text-capitalize">Tentang Kami</span>
                </router-link>
              </v-btn>
              <v-btn class="justify-start no-hover " text>
                <router-link class="nav-link primary--text hover-text" to="/church">
                  <span class="mr-2 text-capitalize">Gereja</span>
                </router-link>
              </v-btn>
              <v-btn class="justify-start no-hover " text>
                <router-link class="nav-link primary--text hover-text" to="/news">
                  <span class="mr-2 text-capitalize">informasi</span>
                </router-link>
              </v-btn>
              <v-btn class="justify-start no-hover " text href="mailto:admin@sinodekibaid.org">
                <span class="mr-2 text-capitalize">Kontak</span>
              </v-btn>
            </v-row>
          </template>
        </v-col>
        <v-col cols="12" sm="4" md="4" xl="4" class="order-2 order-sm-3 order-md-3 order-xl-3 mb-8">
          <v-row>
            <div class="primary--text text--uppercase text-h6 pl-4 mb-3">KONTAK KAMI</div>
          </v-row>
          <v-row class="flex-column flex-wrap">
            <v-btn v-for="(icon, i) in icons" :key="i" class="mx-4 primary--text justify-start text-capitalize ml-0"
              :href="icon.link" target="_blank" text>
              <v-icon size="24px" class="mr-2">{{ icon.text }}</v-icon>
              {{ icon.social }}
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  data: () => ({
    icons: [
      {
        text: "mdi-instagram",
        social: "Instagram",
        link: "https://instagram.com/kibaid",
      },
      {
        text: "mdi-facebook",
        social: "Facebook",
        link: "https://instagram.com/facebook",
      },
      {
        text: "mdi-whatsapp",
        social: "Whatsapp",
        link: "",
      },
      {
        text: "mdi-email",
        social: "Email",
        link: "",
      },
    ],
  }),
};
</script>
