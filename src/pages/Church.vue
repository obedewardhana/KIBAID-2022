<template>
  <div id="churchPage">
    <BannerComp title="Gereja" />
    <BreadcrumbComp :list="menu" />
    <v-container>
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-card elevation="0" color="transparent" class="pt-8 pb-0">
            <v-card-title class="py-0 text-h5 font-weight-bold primary--text text-uppercase justify-center text-center">
              KILAS KLASIS
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FeedPerCategoryComp :feeds="feedpc"/>
    <ChurchSectionComp />
    <DonationSectionComp />
  </div>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import ChurchSectionComp from "@/components/Church/ChurchSection.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
  name: "ChurchView",
  components: {
    BannerComp,
    BreadcrumbComp,
    ChurchSectionComp,
    DonationSectionComp,
    FeedPerCategoryComp
  },
  data: () => ({
    menu: [
      {
        label: 'Home',
        link: '/home'
      },
      {
        label: 'Gereja',
        link: '/church'
      }
    ],
    feedpc: [
      {
        src: require('@/assets/img/img-church1.jpg'),
        title: 'Kilas Klasis 1',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Kilas Klasis 2',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-church1.jpg'),
        title: 'judul 1',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'judul 2',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: 'news/detail',
        category: 'Klasis',
        date: '22 Agustus 2022'
      },
    ],
  })
};
</script>
<style lang="scss" scoped>

</style>
  

