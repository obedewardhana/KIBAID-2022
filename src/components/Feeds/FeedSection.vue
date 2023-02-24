<template>
    <section id="feed">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8" tile>
                        <v-row>
                            <v-col cols="8" class="pr-0">
                                <div class="feed-date">
                                    <h1>{{ new Intl.DateTimeFormat('id', options).format(new Date()) }}</h1>
                                </div>
                            </v-col>
                            <v-col cols="4" class="pl-0">
                                <div class="feed-control">
                                    <v-btn @click="slidePrev" class="btn-control btn-feed-prev">
                                        <v-icon size="24px">mdi-arrow-left</v-icon>
                                    </v-btn>
                                    <v-btn @click="slideNext" class="btn-control btn-feed-next">
                                        <v-icon size="24px">mdi-arrow-right</v-icon>
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="2" sm="4" md="4" xl="4" class="pt-0">
                                <div class="feed-filter">
                                    <v-btn :ripple="false" v-for="category in categories" :key="category.title"
                                        :class="category.class + `${category.title === filter ? ' active ' : ''}`"
                                        :data-filter="category.title" @click="getFilter(category.title)">
                                        <v-icon size="24px" class="mr-2">{{ category.icon }}</v-icon>
                                        {{ category.title }}
                                    </v-btn>
                                </div>
                            </v-col>
                            <v-col cols="10" sm="8" md="8" xl="8" class="pt-0">
                                <div class="loading-box">
                                    <v-overlay :value="overlay" absolute>
                                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                                    </v-overlay>
                                    <VueSlickCarousel v-bind="settings" @reinit="getFilter" ref="carousel">
                                        <template v-if="filter == 'informasi'">
                                            <div class="feed-item overflow-hidden" v-for="(feed, i) in feeds" :key="i">
                                                <v-overlay value="true" color="primary" absolute>
                                                    <div class="feed-content">
                                                        <v-img :src="feed.src" :lazy-src="feed.src" aspect-ratio="1"
                                                            class="feed-img fill-height"></v-img>
                                                        <div class="feed-item-header text-left">
                                                            <h2 class="text-capitalize">{{ feed.title }}</h2>
                                                            <p class="text-small gray--text">
                                                                <v-icon size="12" class="mr-1">mdi-calendar</v-icon>
                                                                {{feed.date}}
                                                            </p>
                                                        </div>
                                                        <span class="feed-category">{{ feed.category }}</span>
                                                        <v-btn :ripple="false" :href="feed.link"  text
                                                            color="white" class="text-capitalize btn-default no-hover"
                                                            dark>
                                                            Read more >
                                                        </v-btn>
                                                    </div>
                                                </v-overlay>
                                            </div>
                                        </template>
                                        <template v-else-if="filter == 'Renungan'">
                                            <div class="feed-item overflow-hidden" v-for="(renungan, i) in renungans"
                                                :key="i">
                                                <v-overlay value="true" color="primary" absolute>
                                                    <div class="feed-content">
                                                        <v-img :src="renungan.src" :lazy-src="renungan.src"
                                                            aspect-ratio="1" class="feed-img fill-height"></v-img>
                                                        <div class="feed-item-header text-left">
                                                            <h2 class="text-capitalize">{{ renungan.title }}</h2>
                                                            <p class="text-small gray--text">
                                                                <v-icon size="12" class="mr-1">mdi-calendar</v-icon>
                                                                {{renungan.date}}
                                                            </p>
                                                        </div>
                                                        <span class="feed-category">{{ renungan.category }}</span>
                                                        <v-btn :ripple="false" :href="renungan.link" 
                                                            text color="white"
                                                            class="text-capitalize btn-default no-hover" dark>
                                                            Read more >
                                                        </v-btn>
                                                    </div>
                                                </v-overlay>
                                            </div>
                                        </template>
                                        <template v-else-if="filter == 'Organisasi'">
                                            <div class="feed-item overflow-hidden"
                                                v-for="(organisasi, i) in organisasis" :key="i">
                                                <v-overlay value="true" color="primary" absolute>
                                                    <div class="feed-content">
                                                        <v-img :src="organisasi.src" :lazy-src="organisasi.src"
                                                            aspect-ratio="1" class="feed-img fill-height"></v-img>
                                                        <div class="feed-item-header text-left">
                                                            <h2 class="text-capitalize">{{ organisasi.title }}</h2>
                                                            <p class="text-small gray--text">
                                                                <v-icon size="12" class="mr-1">mdi-calendar</v-icon>
                                                                {{organisasi.date}}
                                                            </p>
                                                        </div>
                                                        <span class="feed-category">{{ organisasi.category
                                                        }}</span>
                                                        <v-btn :ripple="false" :href="organisasi.link"
                                                            text color="white"
                                                            class="text-capitalize btn-default no-hover" dark>
                                                            Read more >
                                                        </v-btn>
                                                    </div>
                                                </v-overlay>
                                            </div>
                                        </template>
                                        <template v-else-if="filter == 'Download'">
                                            <div class="feed-item overflow-hidden" v-for="(download, i) in downloads"
                                                :key="i">
                                                <v-overlay value="true" color="primary" absolute>
                                                    <div class="feed-content">
                                                        <v-img :src="download.src" :lazy-src="download.src"
                                                            aspect-ratio="1" class="feed-img fill-height"></v-img>
                                                        <div class="feed-item-header text-left">
                                                            <h2 class="text-capitalize">{{ download.title }}</h2>
                                                            <p class="text-small gray--text">
                                                                <v-icon size="12" class="mr-1">mdi-calendar</v-icon>
                                                                {{download.date}}
                                                            </p>
                                                        </div>
                                                        <span class="feed-category">{{ download.category }}</span>
                                                        <v-btn :ripple="false" :href="download.link"
                                                            text color="white"
                                                            class="text-capitalize btn-default no-hover" dark>
                                                            Read more >
                                                        </v-btn>
                                                    </div>
                                                </v-overlay>
                                            </div>
                                        </template>
                                    </VueSlickCarousel>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: "FeedSectionComp",
    components: { VueSlickCarousel },
    data: () => ({
        settings: {
            "dots": false,
            "arrows": false,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 2,
            "rows": 2,
            "slidesPerRow": 1,
            "slidesToScroll": 2,
            "initialSlide": 0,
            "autoplay": false,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": true,
                    }
                },
                {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "initialSlide": 0,
                        "infinite": true
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true
                    }
                }
            ]
        },
        options: {
            "weekday": 'long',
            "day": 'numeric',
            "month": 'long',
            "year": 'numeric'
        },
        feeds: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
        ],
        renungans: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'renungan',
                date: '22 Agustus 2022'
            },
        ],
        organisasis: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'organisasi',
                date: '22 Agustus 2022'
            },
        ],
        downloads: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 1',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'judul 2',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'judul 3',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'judul 4',
                link: 'news/detail',
                category: 'download',
                date: '22 Agustus 2022'
            },
        ],
        categories: [
            {
                title: 'informasi',
                icon: 'mdi-newspaper'
            },
            {
                title: 'Renungan',
                icon: 'mdi-book'
            },
            {
                title: 'Organisasi',
                icon: 'mdi-account'
            },
            {
                title: 'Download',
                icon: 'mdi-download'
            }
        ],
        filter: 'informasi',
        isActive: false,
        overlay: false
    }),
    methods: {
        getFilter(event) {
            this.overlay = true;
            var filtered = event;
            this.filter = filtered;
            this.$refs.carousel.goTo('0');
            setTimeout(() => (this.overlay = false), 900);
            console.log(filtered);
        },
        slideNext() {
            this.$refs.carousel.next();
        },
        slidePrev() {
            this.$refs.carousel.prev();
        },
        getTanggal() {
            const datetime = new Date();
            let options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            };

            console.log(new Intl.DateTimeFormat('id', options).format(datetime));
        }
    }
}
</script>