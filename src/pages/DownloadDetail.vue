<template>
    <div id="downloadPage">
      <BannerComp title="Renungan Hari Ini" />
      <BreadcrumbComp :list="menu" />
      <section class="pb-10">
        <v-container>
          <v-row class="news-container" data-v-sticky-container>
            <div class="col-12 col-sm-6 col-md-8 col-xl-8 news-main pb-8 pb-sm-8 ob-md-0 pb-lg-0">
              <FeedDetailComp :feedd="detail" />
            </div>
            <template v-if="(windowWidth > 767)">
              <div class="col-12 col-sm-6 col-md-4 col-xl-4 news-sidebar" :class="{ 'bottom-reach': isAddClass }"
                v-sticky="options" @affixed-container-bottom="handleBottom" @affix-top="handleTop">
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
    </div>
  </template>
      
  <script>
  import BannerComp from "@/components/Banner.vue";
  import BreadcrumbComp from "@/components/Breadcrumb.vue";
  import FeedStackedComp from "@/components/Feeds/FeedStacked.vue";
  import FeedDetailComp from "@/components/Feeds/FeedDetail.vue";
  import VueStickyDirective from '@renatodeleao/vue-sticky-directive';
  
  export default {
    name: "DownloadDetailView",
    components: {
      BannerComp,
      BreadcrumbComp,
      FeedStackedComp,
      FeedDetailComp
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
          label: 'Renungan hari ini',
          link: '/download'
        },
        {
          label: 'Judul Download',
          link: '/download/detail'
        }
      ],
      news: [
        {
          src: require('@/assets/img/img-pray1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 1',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 2',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship2.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 3',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-pray1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 4',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-pray1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 1',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 2',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship2.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 3',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-pray1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. 4',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
      ],
      stacked: [
        {
          src: require('@/assets/img/img-pray1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. ',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship1.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. ',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        },
        {
          src: require('@/assets/img/img-worship2.jpg'),
          title: 'Lorem Ipsum is simply dummy text of the printing. ',
          link: 'download/detail',
          description: 'This is the short description for the card purpose.',
          category: 'Renungan hari ini',
          date: '22 Agustus 2022'
        }
      ],
      options: {
        topSpacing: 90,
        bottomSpacing: -90,
        stickyClass: "is-affixed",
        resizeSensor: true,
  
      },
      detail: [
        {
          src: require('@/assets/img/img-pray1.jpg'),
          imgauthor: 'https://pixabay.com',
          title: 'Lorem Ipsum is simply dummy text of the printing.',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          category: 'renungan hari ini',
          date: '22 Agustus 2022',
          editor: 'Admin Kibaid',
          url: 'https://kibaid.org/download/detail'
        },
      ],    
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
      
    
    