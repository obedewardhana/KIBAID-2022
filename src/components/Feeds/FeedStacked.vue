<template>
    <v-row>
        <v-col cols="12">
            <h2 class="primary--text px-0 px-sm-8 px-md-8 px-xl-8 text-center text-sm-center text-md-left text-lg-left">BERITA LAINNYA</h2>
        </v-col>
        <v-col cols="12" sm="12" md="12" xl="12">
            <v-card :elevation="0" color="transparent" tile class="pb-4 px-0 px-sm-8 px-md-8 px-xl-8" v-for="(feed, idx) in feedst"
                :key="(idx || feed.link || feed.title)">

                <div class="feed-horizontal-item stacked" :ripple="false" :href="feed.link" target="_blank">
                    <div class="feed-horizontal-content">
                        <v-card-title class="py-0 px-0">
                            <v-btn :ripple="false" :href="feed.link" target="_blank" text color="primary"
                                class="text-capitalize no-hover hover-text" dark>
                                <h4 class="">{{ feed.title }}</h4>
                            </v-btn>
                        </v-card-title>
                    </div>
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" >
            <v-date-picker v-model="picker" no-title></v-date-picker>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'FeedStackedComp',
    props: {
        feedst: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data: () => ({
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    })
}
</script>