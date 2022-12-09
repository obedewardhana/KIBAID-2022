<template>
    <v-col cols="12">
        <v-card :elevation="0" class="mx-5" color="accent" dark max-width="400">
            <v-card-title class="d-flex justify-center">
                <span class="text-p font-weight-light text-center">Pengikut Kami</span>
            </v-card-title>

            <v-card-text class="text-p d-flex align-center pl-4 pb-0">
                <v-icon large left>
                    mdi-instagram
                </v-icon>
                <span data-purecounter-start="0" data-purecounter-end="12000"
                    class="purecounter large white--text text-h5 font-weight-bold mr-2">
                </span>
                <span class="text-small font-weight-thin">Followers</span>
            </v-card-text>

            <v-card-text class="text-p d-flex align-center pl-4 pt-2 pb-0">
                <v-icon large left>
                    mdi-facebook
                </v-icon>
                <span data-purecounter-start="0" data-purecounter-end="5000"
                    class="purecounter large white--text text-h5 font-weight-bold mr-2">
                </span>
                <span class="text-small font-weight-thin">Followers</span>
            </v-card-text>

            <v-card-text class="text-p d-flex align-center pl-4 pt-2 pb-8">
                <v-icon large left>
                    mdi-web
                </v-icon>
                <span data-purecounter-start="0" data-purecounter-end="500"
                    class="purecounter large white--text text-h5 font-weight-bold mr-2">
                </span>
                <span class="text-small font-weight-thin">Visitors</span>
            </v-card-text>

        </v-card>
    </v-col>
</template>

<script>

import PureCounter from '@srexi/purecounterjs'
export default {
    name: 'FollowersComp',
    components: {
        PureCounter
    },
    data: () => ({

    }),
    methods: {
        counter() {
            new PureCounter({
                duration: 2,
                once: true,
                repeat: false,
            });
        }
    },
    mounted() {
        this.counter()
    }
}
</script>