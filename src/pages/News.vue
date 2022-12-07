<template>
  <section id="newsPage">
    <BannerComp title="Kabar" />
    <BreadcrumbComp :list="menu" />
    <FeedPerCategoryComp :feeds="news" />
  </section>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
export default {
  name: "NewsView",
  components: {
    BannerComp,
    BreadcrumbComp,
    FeedPerCategoryComp
  },
  data: () => ({
    menu: [
      {
        label: 'Home',
        link: '/home'
      },
      {
        label: 'Kabar',
        link: '/news'
      }
    ],
    news: [
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 1',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'judul 2',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 1',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'judul 2',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: '',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
    ],
  }),
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>

</style>
  

