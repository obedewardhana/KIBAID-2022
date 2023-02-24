<template>
    <section id="jadwal-ibadah-gereja" class="bg--gray">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8 px-3" v-for="local in locals" :key="local.id"
                        tile>
                        <v-card-title class="text-h5 font-weight-bold primary--text text-uppercase d-block text-center mb-5"
                            style="width:100%;">
                            JADWAL IBADAH {{ local.title }} <br>
                        </v-card-title>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" xl="6"
                                class="px-0 py-4 d-flex flex-column flex-wrap justify-center">
                                <v-card-text class="rounded-xl py-4 d-flex flex-row mx-auto"
                                    v-for="(sch, idx) in local.ibadah" :key="idx">
                                    <v-icon size="30" color="primary">{{ sch.icon }}</v-icon>
                                    <div class="px-2">
                                        <p
                                            class="text-p mb-0 text-md-p text-lg-p primary--text text-capitalize font-weight-bold py-0">
                                            {{ sch.judul }}</p>
                                        <p class="text-p mb-0 text-uppercase primary--text">{{
                                            sch.hari
                                        }} — {{ sch.jam }}</p>
                                    </div>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" sm="12" md="6" xl="6" class="px-0 py-4">
                                <v-card-text class="rounded-xl py-4 d-flex flex-row mx-auto"
                                    v-for="(adr, idx) in local.location" :key="idx">
                                    <v-icon size="30" color="primary">{{ adr.icon }}</v-icon>
                                    <div class="px-2 location-box">
                                        <v-btn
                                            class="d-block text-p mb-0 text-md-p text-lg-p primary--text text-capitalize text-left font-weight-bold py-0 px-0"
                                            text :href="adr.maps" target="_blank"
                                            style="white-space:normal;word-break: break-word;height:auto;">
                                            <p class="mr-2 primary--text text-uppercase text-left font-weight-bold my-0">{{
                                                adr.nama }}</p>
                                            <p class=" mr-2 primary--text text-capitalize  my-0">{{ adr.lokasi }}</p>
                                        </v-btn>
                                    </div>
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
    name: 'ScheduleComp',
    props: {
        locals: {
            type: Array,
            required: true,
            default: () => [],
            ibadah: {
                type: Array,
                required: true,
                default: () => []
            },
            lokasi: {
                type: Array,
                required: true,
                default: () => []
            }
        }
    },
    data: () => ({
        tab: null,
    })
}
</script>