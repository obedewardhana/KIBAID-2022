<template>
  <v-app>
    <LoadingComp v-if="isLoading"></LoadingComp>
    <NavigationComp v-if="!$route.meta.hideNavbar" :color="color" :flat="flat" />
    <NavLocalComp v-if="$route.meta.showLocal" :color="color" :flat="flat" />
    <NavPakuComp v-if="$route.meta.showPaku" :color="color" :flat="flat" />
    <NavJakComp v-if="$route.meta.showJak" :color="color" :flat="flat" />
    <v-main class="pt-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-scale-transition>
      <v-btn fab v-show="fab" v-scroll="onScroll" dark fixed bottom right color="secondary" @click="toTop">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <FooterComp v-if="!$route.meta.hideFooter" />
    <FooterPakuComp v-if="$route.meta.showFPaku" />
    <FooterJakComp v-if="$route.meta.showFJak" />
  </v-app>
</template>

<script>
import '@/assets/scss/style.scss';
import '@/assets/scss/responsive.scss';
import Vue from "vue";
import NavigationComp from "./components/Navigation";
import NavLocalComp from "./components/NavLocal";
import NavPakuComp from "./components/NavPaku";
import NavJakComp from "./components/NavJak";
import FooterComp from "./components/Footer";
import FooterPakuComp from "./components/FooterPaku";
import FooterJakComp from "./components/FooterJak";
import LoadingComp from "@/components/Loading";

export default Vue.extend({
  name: "App",
  components: {
    NavigationComp,
    NavLocalComp,
    NavPakuComp,
    NavJakComp,
    FooterComp,
    FooterPakuComp,
    FooterJakComp,
    LoadingComp
  },


  data: () => ({
    fab: null,
    color: "secondary",
    flat: null,
    isLoading: true,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 120) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    }
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
});
</script>
