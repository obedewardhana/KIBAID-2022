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
                                <span class="mr-3">Lokasi: </span>
                                <!-- <h4 class="text-p text-uppercase mb-0 bluesea--text">{{ clickedLocation }}</h4> -->
                                <v-select v-model="select" class="select-map" @change="onChange($event)" :items="items"
                                    item-text="province" item-value="province" label="Pilih Lokasi"
                                    single-line></v-select>
                            </div>
                            <ul class="map-info-content" id="mapInfo">
                                <v-overlay :value="overlay" absolute>
                                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                                </v-overlay>
                                <template v-for="(church, i) in churches">
                                    <template v-if="clickedLocation == church.province">
                                        <li>
                                            <v-btn large depressed target="_blank" :href="church.link">
                                                <div class="map-church-header">

                                                    <div class="text-small">{{ church.title }}</div>
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

const papua = [
    'Papua',
    'Papua Barat'
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
                    title: 'Klasis Jawa & Sumatera',
                    province: 'Jawa & Sumatera',
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
                },
                {
                    title: 'Klasis Mengkendek Timur',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Makale Tengah',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Bontang - Kutai Timur',
                    province: 'Kalimantan Timur',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Sulawesi Tengah Timur',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Sulawesi Tengah',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Kendari Konawe',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Kolaka Bombana',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Luwu Timur',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Luwu Selatan',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Mangkutana',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Luwu Utara',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: 'Klasis Bongga Karadeng',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Pa'buaran",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Bittuang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Ulusalu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Rantetayo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Rembon Malimbong Balepe'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Sangalla",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Rantepao",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Randan Batu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Makale Utara",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Mengkendek Tengah",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Mengkendek Utara",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Mengkendek Barat",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Benteng Alla'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Gandang Batu Sillanan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Mamuju Tengah Utara",
                    province: 'Sulawesi Barat',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Wilayah Papua",
                    province: 'Papua',
                    category: 'Non Klasis',
                    link: ''
                },
                {
                    title: "Klasis Balikpapan",
                    province: 'Kalimantan Timur',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Berau",
                    province: 'Kalimantan Utara',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Samarinda",
                    province: 'Kalimantan Timur',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Polewali Mamasa",
                    province: 'Sulawesi Barat',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Mamuju",
                    province: 'Sulawesi Barat',
                    category: 'Klasis',
                    link: ''
                },
                {
                    title: "Klasis Makassar",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: ''
                }
                
            ],
            select: null,
            items: [
                { province: 'Jawa & Sumatera' },
                { province: 'Kalimantan Utara' },
                { province: 'Kalimantan Tengah' },
                { province: 'Kalimantan Selatan' },
                { province: 'Kalimantan Barat' },
                { province: 'Kalimantan Timur' },
                { province: 'Sulawesi Utara' },
                { province: 'Gorontalo' },
                { province: 'Sulawesi Tengah' },
                { province: 'Sulawesi Selatan' },
                { province: 'Sulawesi Barat' },
                { province: 'Sulawesi Tenggara' },
                { province: 'Maluku' },
                { province: 'Maluku Utara' },
                { province: 'Nusa Tenggara Barat' },
                { province: 'Nusa Tenggara Timur' },
                { province: 'Bali' },
                { province: 'Papua' }
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
            if (jawasumatra.includes(getLocationName(event.target))) {                
                this.clickedLocation = "Jawa & Sumatera";
                this.select = "Jawa & Sumatera";
            } else if (papua.includes(getLocationName(event.target))) {  
                this.clickedLocation = "Papua";
                this.select = "Papua";
            } else {
                this.clickedLocation = getLocationName(event.target);
                this.select = getLocationName(event.target);
            }
            this.$nextTick(() =>
                document.getElementById('church').scrollIntoView({ behavior: 'smooth' })
            );
            // window.open(URL[event.target.id], '_blank');
        },
        onChange(event) {
            console.log(this.select);
            this.overlay = true;
            setTimeout(() => (this.overlay = false), 900);
            this.clickedLocation = this.select;
            this.$nextTick(() =>
                document.getElementById('church').scrollIntoView({ behavior: 'smooth' })
            );
        }
    }
}
</script>