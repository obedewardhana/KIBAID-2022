<template>
    <section id="feed">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="pt-8" tile>
                        <v-row>
                            <v-col cols="12" class="">
                                <div class="feed-control single">
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
                            <v-col cols="12" class="pt-0">
                                <div class="loading-box">
                                    <v-overlay :value="overlay" absolute>
                                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                                    </v-overlay>
                                    <VueSlickCarousel v-bind="settings" ref="carousel">
                                        <div class="feed-item overflow-hidden" v-for="(feed, idx) in feeds"
                                            :key="(idx || feed.link || feed.title)">
                                            <v-overlay value="true" color="primary" absolute>
                                                <div class="feed-content">
                                                    <v-img :src="feed.src" :lazy-src="feed.src" aspect-ratio="1"
                                                        class="feed-img fill-height"></v-img>
                                                    <div class="feed-item-header text-left">
                                                        <h3 class="text-capitalize mb-2">{{ feed.title }}</h3>
                                                        <p class="text-small gray--text">
                                                            <v-icon size="12" class="mr-1">mdi-calendar</v-icon>
                                                            {{ feed.date }}
                                                        </p>
                                                    </div>
                                                    <span class="feed-category">{{ feed.category }}</span>
                                                    <v-btn :ripple="false" :href="feed.link" text
                                                        color="white" class="text-capitalize btn-default no-hover" dark>
                                                        Read more >
                                                    </v-btn>
                                                </div>
                                            </v-overlay>
                                        </div>
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
    name: "FeedPerCategoryComp.vue",
    components: { VueSlickCarousel },
    props: {
        feeds: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data: () => ({
        settings: {
            "dots": false,
            "arrows": false,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 3,
            "rows": 1,
            "slidesPerRow": 1,
            "slidesToScroll": 3,
            "initialSlide": 0,
            "autoplay": true,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                    }
                },
                {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
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
        isActive: false,
        overlay: false
    }),
    methods: {
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