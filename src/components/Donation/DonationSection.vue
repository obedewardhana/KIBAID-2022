<template>
  <section id="donation" class="bg--bluelighter overflow-hidden">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card :elevation="0" color="transparent" class="py-8 px-3" tile>
            <v-row>
              <v-col cols="12" sm="8" md="6" xl="6">
                <v-card-title class="text-h5 font-weight-bold primary--text text-capitalize"
                  style="z-index:2;position:relative;">
                  Mari Mendukung Pelayanan Kami
                </v-card-title>
                <v-card-text class="primary--text" style="z-index:2;position:relative;">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="4" md="6" xl="6">
                <div class="action-box" style="z-index:2;position:relative;">
                  <v-btn x-large depressed color="primary" class="text-capitalize btn-default" dark
                    @click.stop="showDonate = true"> Donasi
                    <DonationComp v-model="showDonate" />
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" xl="6">
          <v-img src="@/assets/img/icon-donation.png" class="feature-img" contain />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "DonationSectionComp",
  components: {
    DonationComp: () => import("./Donate.vue")
  },
  data: () => ({
    showDonate: false
  }),
};
</script>