<template>
    <section id="infographic">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="px-3" tile>
                        <v-row>
                            <v-col cols="12">
                                <v-card-title
                                    class="text-h5 font-weight-bold bluesea--text text-uppercase justify-center mb-5">
                                    Gereja Kami
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-church.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Gereja Lokal</h1>
                                                    <p>
                                                        <span data-purecounter-start="0" data-purecounter-end="275"
                                                            class="purecounter">
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-bible.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Pendeta/Penginjil</h1>
                                                    <p>
                                                        <span data-purecounter-start="0" data-purecounter-end="513"
                                                            class="purecounter">
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-user.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Jemaat</h1>
                                                    <p>
                                                        <span data-purecounter-start="0" data-purecounter-end="35800"
                                                            class="purecounter">
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-earth.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Provinsi</h1>
                                                    <p>
                                                        <span data-purecounter-start="0" data-purecounter-end="27"
                                                            class="purecounter">
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
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
import PureCounter from '@srexi/purecounterjs'
export default {
    name: "InfographicSectionComp",
    components: {
        PureCounter
    },
    data: () => ({
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