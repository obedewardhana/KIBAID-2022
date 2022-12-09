<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" xl="12">
            <v-card :elevation="0" color="transparent" tile class="pb-4" v-for="(feed, idx) in arr"
                :key="(idx || feed.link || feed.title)">
                <div class="feed-horizontal-item">
                    <v-img :src="feed.src" :lazy-src="feed.src" aspect-ratio="2"></v-img>
                    <div class="feed-horizontal-content">
                        <div class="d-flex justify-space-between">
                            <span class="feed-category">{{ feed.category }}</span>
                            <p class="text-small secondary--text px-5 pt-5 mb-4">
                                <v-icon size="16" class="mr-1 secondary--text">mdi-calendar</v-icon>
                                {{ feed.date }}
                            </p>
                        </div>
                        <v-card-title class="pt-0 pb-1">
                            <h5 class="text-capitalize secondary--text">{{ feed.title }}</h5>
                        </v-card-title>
                        <v-card-text class="pb-0">
                            <p class="text-small text-capitalize bluesea--text pb-0">{{ feed.description }}</p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn :ripple="false" :href="feed.link" text color="primary"
                                class="text-capitalize text-small no-hover hover-text" dark>
                                Read more >
                            </v-btn>
                        </v-card-actions>
                    </div>
                </div>
            </v-card>
            <div class="d-flex justify-center justify-md-start justify-xl-start" v-if="(pages > 1)">
                <v-pagination class="pagination mb-2 mt-8" v-model="page" :length="pages"
                    @input="updatePage"></v-pagination>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'FeedHorizontalComp',
    props: {
        feedspc: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data: () => ({
        page: 1,
        pageSize: 6,
        listCount: 0,
        arr: [],
    }),
    created() {
        this.initPage();
        this.updatePage(this.page);
    },
    methods: {
        initPage() {
            this.listCount = this.feedspc.length;
            if (this.listCount < this.pageSize) {
                this.arr = this.feedspc;
            } else {
                this.arr = this.feedspc.slice(0, this.pageSize);
            }
            console.log(this.arr);
        },
        updatePage(pageIndex) {
            let start = (pageIndex - 1) * this.pageSize;
            let end = pageIndex * this.pageSize;
            this.arr = this.feedspc.slice(start, end);
            this.page = pageIndex;
        },
    },
    computed: {
        pages() {
            if (this.pageSize == null || this.listCount == null) return 0;
            return Math.ceil(this.listCount / this.pageSize);
        }
    }
}
</script>