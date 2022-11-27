<template>
    <div>
        <v-row justify="space-around">
            <v-col cols="auto">
                <v-dialog v-model="show"  max-width="600">
                    <v-card>
                        <v-card-title class="text-h5 font-weight-bold primary--text text-capitalize"
                            style="z-index:2;position:relative;">
                            Berikan Donasi Anda melalui :
                        </v-card-title>
                        <v-card-text class="primary--text">
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>BCA</v-list-item-title>
                                    <v-list-item-subtitle>a.n. Sinode Kibaid</v-list-item-subtitle>
                                    <v-list-item-subtitle>0123456677</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title>BNI</v-list-item-title>
                                    <v-list-item-subtitle>a.n. Sinode Kibaid</v-list-item-subtitle>
                                    <v-list-item-subtitle>0123456677</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title>Mandiri</v-list-item-title>
                                    <v-list-item-subtitle>a.n. Sinode Kibaid</v-list-item-subtitle>
                                    <v-list-item-subtitle>0123456677</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
export default {
    name: "DonationComp",
    props: {
        value: Boolean
    },

    data: () => ({
        isBusy: false,
    }),

    computed: {
        show: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        },
    },

    methods: {
    }
}

</script>
  