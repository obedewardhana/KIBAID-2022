<template>
  <section id="newsPage">
    <BannerComp title="Kabar" />
    <BreadcrumbComp :list="menu" />
    <FeedPerCategoryComp :feeds="news" class="pb-8" />
    <section class="pb-10">
      <v-container>
        <v-row class="your-container-class" data-v-sticky-container>
          <div class="col-12 col-sm-6 col-md-8 col-xl-8">
            <FeedHorizontalComp :feedspc="news" />
          </div>
          <template v-if="(windowWidth > 767)">
            <div class="col-12 col-sm-6 col-md-4 col-xl-4 news-sidebar" v-sticky="options">
              <FeedStackedComp :feedst="stacked" class="news-sidebar_inner" data-v-sticky-inner />
            </div>
          </template>
          <template v-else>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4 news-sidebar">
              <FeedStackedComp :feedst="stacked" />
            </div>
          </template>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import FeedStackedComp from "@/components/Feeds/FeedStacked.vue";
import FeedHorizontalComp from "@/components/Feeds/FeedHorizontal.vue";
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';

export default {
  name: "NewsView",
  components: {
    BannerComp,
    BreadcrumbComp,
    FeedPerCategoryComp,
    FeedStackedComp,
    FeedHorizontalComp
  },
  directives: {
    "sticky": VueStickyDirective
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
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
    ],
    stacked: [
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: '',
        description: 'This is the short description for the card purpose.',
        category: 'kabar',
        date: '22 Agustus 2022'
      }
    ],
    options: {
      topSpacing: 90
    },
    windowWidth: window.innerWidth
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
  

