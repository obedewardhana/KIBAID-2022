<template>
    <section id="struktur-organisasi-klasis" class="bg--gray">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8 px-3" tile>
                        <v-row>
                            <v-col cols="12" class="px-0">
                                <v-card-title v-for="klas in klasis" :key="klas.id"
                                    class="text-h5 font-weight-bold primary--text text-uppercase d-block text-center mb-5">
                                    BADAN PENGURUS MAJELIS GEREJA {{ klas.klasis }} <br>
                                    <span class="text-p font-weight-bold">PERIODE : {{ klas.periode }}</span>
                                </v-card-title>
                                <v-card-text class="px-0">
                                    <v-tabs v-model="tab" background-color="bluesea" class="overflow-auto"
                                        :show-arrows="true" dark>
                                        <v-tab v-for="item in items" :key="item.tab" class="block bg--bluesea ">
                                            <p class="text-p text-uppercase white--text mb-0">{{ item.tab }}
                                            </p>
                                        </v-tab>

                                        <v-tabs-items v-model="tab" style="max-height: calc((134px*2) + 20px)!important; overflow: auto;">
                                            <v-tab-item v-for="item in items" :key="item.tab">
                                                <v-card elevation="0" color="bluesea" class="py-5 px-5" tile>
                                                    <v-row>
                                                        <v-col cols="12" sm="4" md="4" xl="4" v-for="(pers, idx) in item.person" :key="idx">

                                                            <v-card-text 
                                                                class="d-flex flex-row  justify-start align-center bg--white rounded"  style="height:110px">
                                                                <v-img :src="pers.src" :lazy-src="pers.src"
                                                                    style="width:30%; max-width:60px;" aspect-ratio="1"
                                                                    class="feed-img rounded-circle mr-3 my-3 mr-md-5 my-md-5 mr-lg-5 my-lg-5"></v-img>
                                                                <div class="text-left"
                                                                    style="width:70%">
                                                                    <p
                                                                        class="text-p mb-0 text-md-p text-lg-p primary--text text-capitalize font-weight-bold">
                                                                        {{ pers.name }}</p>
                                                                    <p class="text-p mb-0 text-uppercase primary--text">{{
                                                                            item.tab
                                                                    }}</p>
                                                                </div>
                                                            </v-card-text>
                                                        </v-col>
                                                    </v-row>
                                                </v-card>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </v-tabs>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    name: 'SOKlasisComp',
    props: {
        klasis: {
            type: Array,
            required: true,
            default: () => []
        },
        items: {
            type: Array,
            required: true,
            default: () => [],
            person: {
                type: Array,
                required: true,
                default: () => []
            },
        },
    },
    data: () => ({
        tab: null,
    })
}
</script>