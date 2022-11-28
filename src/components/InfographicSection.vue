<template>
    <section id="infographic">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="py-8 pb-10 px-3" tile>
                        <v-row>
                            <v-col cols="12">
                                <v-card-title
                                    class="text-h5 font-weight-bold bluesea--text text-uppercase justify-center mb-5">
                                    Infographic
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-church.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Gereja Lokal</h1>
                                                    <p>275</p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-bible.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Pendeta/Penginjil</h1>
                                                    <p>513</p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-user.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Jemaat</h1>
                                                    <p>35.800</p>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6" xl="6" class="px-0 py-0 bg-infographic">
                                            <div class="info-item">
                                                <img src="@/assets/img/icon-earth.png" alt="Logo" />
                                                <div class="info-content">
                                                    <h1>Provinsi</h1>
                                                    <p>27</p>
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
export default {
    name: "InfographicSectionComp",
    data: () => ({

    })
}
</script>