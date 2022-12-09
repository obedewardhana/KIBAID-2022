<template>
  <section id="newsPage">
    <BannerComp title="Tentang Kami" />
    <BreadcrumbComp :list="menu" />
    <HistoryComp />    
    <FeedPerCategoryComp :feeds="news" class="pb-8"/>
    <InfographicSectionComp />
    <AuthorityComp />
    <FaithSectionComp class="pt-8" />
  </section>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import HistoryComp from "@/components/About/History.vue";
import AuthorityComp from "@/components/About/Authority.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import InfographicSectionComp from "@/components/About/InfographicSection.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
export default {
  name: "AboutView",
  components: {
    BannerComp,
    BreadcrumbComp,
    HistoryComp,
    FeedPerCategoryComp,
    AuthorityComp,
    FaithSectionComp,
    InfographicSectionComp
  },
  data: () => ({
    menu: [
      {
        label: 'Home',
        link: '/home'
      },
      {
        label: 'Tentang Kami',
        link: '/about'
      }
    ],
    news: [
      {
        src: require('@/assets/img/logo-kibaid.png'),
        title: 'Logo KIBAID',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Sejarah KIBAID',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 1',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'judul 2',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'judul 3',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'judul 4',
        link: 'news/detail',
        category: 'Tentang Kami',
        date: '22 Agustus 2022'
      },
    ]
  }),
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>

</style>
  

