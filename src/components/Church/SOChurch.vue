<template>
    <section id="struktur-organisasi-gereja" class="bg--white">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8 px-3" v-for="local in locals" :key="local.id"
                        tile>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" xl="6" class="px-0 py-0">
                                <v-card-text class="d-flex flex-row  justify-start align-center rounded-xl py-2"
                                    v-for="(gem, idx) in local.gembala" :key="idx" style="height:110px">
                                    <v-img :src="gem.src" :lazy-src="gem.src" style="width:30%; max-width:60px;"
                                        aspect-ratio="1"
                                        class="feed-img rounded-circle mr-3 my-3 mr-md-5 my-md-5 mr-lg-5 my-lg-5"></v-img>
                                    <div class="text-left" style="width:70%">
                                        <p
                                            class="text-p mb-0 text-md-p text-lg-p primary--text text-capitalize font-weight-bold">
                                            {{ gem.name }}</p>
                                        <p class="text-p mb-0 text-uppercase primary--text">{{
                                                gem.jabatan
                                        }}</p>
                                    </div>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" xl="6" class="px-0">
                                <v-row>
                                    <v-col cols="12" sm="6" md="6" lg="6" class="py-0"
                                        v-for="(jmt, idx) in local.jemaat" :key="idx">
                                        <v-card-text class="d-flex flex-row  justify-start align-center rounded-xl"
                                            style="height:110px;">
                                            <v-img style="width:30%; max-width:60px;" aspect-ratio="1"
                                                class="feed-img rounded-circle mr-3 my-3 mr-md-5 my-md-5 mr-lg-5 my-lg-5 bg--secondary d-flex align-center text-center">
                                                <v-icon size="30" color="white">{{ jmt.icon }}</v-icon>
                                            </v-img>
                                            <div class="text-left" style="width:70%">
                                                <p class="text-h5 font-weight-bold mb-0 text-uppercase primary--text">
                                                    <span data-purecounter-start="0" :data-purecounter-end="jmt.amount"
                                                        class="purecounter">
                                                    </span>
                                                </p>
                                                <p
                                                    class="text-p mb-0 text-md-p text-lg-p primary--text text-capitalize font-weight-normal">
                                                    {{ jmt.name }}</p>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import PureCounter from '@srexi/purecounterjs'
export default {
    name: 'SOChurchComp',
    components: {
        PureCounter
    },
    props: {
        locals: {
            type: Array,
            required: true,
            default: () => [],
            gembala: {
                type: Array,
                required: true,
                default: () => []
            },
            jemaat: {
                type: Array,
                required: true,
                default: () => []
            }
        }
    },
    data: () => ({
        tab: null,
    }),
    methods: {
        counter() {
            new PureCounter({
                duration: 2,
                once: false,
                repeat: true,
            });
        }
    },
    mounted() {
        this.counter()
    }
}
</script>