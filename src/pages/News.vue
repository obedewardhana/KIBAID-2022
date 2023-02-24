<template>
  <div id="newsPage">
    <BannerComp title="informasi" />
    <BreadcrumbComp :list="menu" />
    <FeedPerCategoryComp :feeds="news" class="pb-8" />
    <section class="pb-10">
      <v-container>
        <v-row class="news-container" data-v-sticky-container>
          <div class="col-12 col-sm-6 col-md-8 col-xl-8 news-main" >
            <FeedHorizontalComp :feedspc="news" />
          </div>
          <template v-if="(windowWidth > 700)">
            <div class="col-12 col-sm-6 col-md-4 col-xl-4 news-sidebar" :class="{'bottom-reach': isAddClass}" v-sticky="options"
            @affixed-container-bottom="handleBottom" @affix-top="handleTop">
              <div class="news-sidebar_inner"  data-v-sticky-inner>
                <FeedStackedComp :feedst="stacked" />
              </div>
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
  </div>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import FeedStackedComp from "@/components/Feeds/FeedStacked.vue";
import FeedHorizontalComp from "@/components/Feeds/FeedHorizontal.vue";
import VueStickyDirective from '@renatodeleao/vue-sticky-directive';
import ResizeSensor from "resize-sensor";
window.ResizeSensor = ResizeSensor;

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
        label: 'Informasi',
        link: '/news'
      }
    ],
    news: [
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
    ],
    stacked: [
      {
        src: require('@/assets/img/img-pray1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship1.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      },
      {
        src: require('@/assets/img/img-worship2.jpg'),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        link: 'news/detail',
        description: 'This is the short description for the card purpose.',
        category: 'informasi',
        date: '22 Agustus 2022'
      }
    ],
    options: {
      topSpacing: 90,
      bottomSpacing: -90,
      stickyClass: "is-affixed",
      resizeSensor: true,

    },
    isAddClass: false,
    windowWidth: window.innerWidth
  }),
  mounted() {
    window.addEventListener('resize', this.onResize);

  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
    handleBottom(payload) {
      console.log(payload);
      this.isAddClass = true;
    },
    handleTop(payload) {
      console.log(payload);
      this.isAddClass = false;
    },
  }
};
</script>
<style lang="scss" scoped>

</style>
  

