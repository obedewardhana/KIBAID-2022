<template>
    <section id="church">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="pb-8 px-3" tile>
                        <div class="map-area">
                            <svg-map :map="Indonesia" location-role="link" @mouseover="pointLocation"
                                @mouseout="unpointLocation" @focus="focusLocation" @blur="blurLocation"
                                @click="clickLocation" />
                        </div>
                        <div class="map-info">
                            <div class="map-info-header">
                                <span class="">Lokasi: </span>
                                <h4 class="text-p text-uppercase mb-0 bluesea--text">{{ clickedLocation }}</h4>
                            </div>
                            <ul class="map-info-content">
                                <v-overlay :value="overlay" absolute>
                                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                                </v-overlay>
                                <template v-for="(church, i) in churches">
                                    <template v-if="clickedLocation == church.province">
                                        <li>
                                            <v-btn large depressed target="_blank" :href="church.link">
                                                <div class="map-church-header">
                                                    <v-icon size="12" class="mr-2">mdi-cross</v-icon>{{ church.title }}
                                                </div>
                                                <p class="text-capitalize map-info-category">{{ church.category }}</p>
                                            </v-btn>
                                        </li>
                                    </template>
                                </template>
                            </ul>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { SvgMap } from "vue-svg-map"
import Indonesia from "@svg-maps/indonesia"
import { getLocationName } from '@/utilities'

const jawasumatra = [
    'Aceh',
    'Sumatera Utara',
    'Sumatera Barat',
    'Riau',
    'Kepulauan Riau',
    'Jambi',
    'Bengkulu',
    'Sumatera Selatan',
    'Lampung',
    'Bangka Belitung',
    'Banten',
    'Jawa Barat',
    'Jakarta Raya',
    'Jawa Tengah',
    'Yogyakarta',
    'Jawa Timur'
];

export default {
    name: "ChurchSectionComp",
    components: {
        SvgMap
    },
    data() {
        return {
            Indonesia,
            pointedLocation: null,
            focusedLocation: null,
            clickedLocation: null,
            churches: [
                {
                    title: 'Klasis Jawa & Sumatra',
                    province: 'Jawa & Sumatra',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Gereja KIBAID Pos PI. Bitung',
                    province: 'Sulawesi Utara',
                    category: 'Non Klasis',
                    link: ''
                },
                {
                    title: 'Gereja KIBAID Jemaat Buli',
                    province: 'Maluku Utara',
                    category: 'Non Klasis',
                    link: ''
                },
                {
                    title: 'Gereja KIBAID Jemaat Ambon',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: ''
                },
                {
                    title: 'Gereja KIBAID Jemaat Ambon Kota',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: ''
                }
                ,
                {
                    title: 'Klasis Pare-pare',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                }
                ,
                {
                    title: 'Klasis Makassar Timur',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                }
                ,
                {
                    title: 'Gereja KIBAID Jemaat Ambon Kota',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: ''
                }
                ,
                {
                    title: 'Gereja KIBAID Jemaat Ambon Kota',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: ''
                }
                ,
                {
                    title: 'Gereja KIBAID Jemaat Ambon Kota',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: ''
                }
            ],
            overlay: false
        };
    },
    methods: {
        pointLocation(event) {
            this.pointedLocation = getLocationName(event.target);
        },
        unpointLocation(event) {
            this.pointedLocation = null
        },
        focusLocation(event) {
            this.focusedLocation = getLocationName(event.target);
        },
        blurLocation(event) {
            this.focusedLocation = null
        },
        clickLocation(event) {
            this.overlay = true;            
            setTimeout(() => (this.overlay = false), 900);
            if (!jawasumatra.includes(getLocationName(event.target))) {
                this.clickedLocation = getLocationName(event.target);
            } else {
                this.clickedLocation = "Jawa & Sumatra";
            }
            // window.open(URL[event.target.id], '_blank');
        },
    }
}
</script>