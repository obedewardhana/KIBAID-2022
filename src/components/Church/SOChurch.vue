<template>
    <section id="struktur-organisasi-gereja" class="bg--gray">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8 px-3" tile>
                        <v-row>
                            <v-col cols="12" class="px-0">
                                <v-card-title v-for="klas in klasis" :key="klas.id"
                                    class="text-h5 font-weight-bold primary--text text-uppercase d-block text-center mb-5">
                                    SO CHURCH <br>
                                    {{ klas.klasis }} 
                                </v-card-title>
                                <v-card-text class="px-0">
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
    name: 'SOChurchComp',
    props: {
        klasis: {
            type: Array,
            required: true,
            default: () => []
        },
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data: () => ({
        tab: null,
    })
}
</script>