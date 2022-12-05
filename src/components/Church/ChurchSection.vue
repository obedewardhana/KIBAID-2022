<template>
    <section id="church">
        <v-container>
            <v-row>
                <v-col cols="12" class="pt-10">
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
                                <template v-for="(church, i) in churchArr">
                                    <li>
                                        <v-btn large depressed target="_blank" :href="church.link">
                                            <div class="map-church-header">
                                                <div class="text-small">{{ church.title }}</div>
                                            </div>
                                            <p class="text-capitalize map-info-category">{{ church.category }}</p>
                                        </v-btn>
                                    </li>
                                </template>
                            </ul>
                            <div v-if="(pages > 1)">
                                <v-pagination class="pagination mb-2 mt-8" v-model="page" :length="pages"
                                    @input="updatePage"></v-pagination>
                            </div>
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
                    title: 'Gereja KIBAID Jemaat Jakarta',
                    province: 'Jakarta Raya',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Cibinong',
                    province: 'Jawa Barat',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Bandung',
                    province: 'Jawa Barat',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Batam',
                    province: 'Kepulauan Riau',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Yogyakarta',
                    province: 'Yogyakarta',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Surabaya',
                    province: 'Jawa Timur',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kupang',
                    province: 'Nusa Tenggara Barat',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tangerang',
                    province: 'Banten',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Karawaci',
                    province: 'Banten',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Bali',
                    province: 'Bali',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos Pi Karanganyar',
                    province: 'Jawa Tengah',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos Pi Salatiga',
                    province: 'Jawa Tengah',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos Pi Malang',
                    province: 'Jawa Tengah',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos Pi Pontianak',
                    province: 'Kalimantan Barat',
                    category: 'Klasis Jawa & Sumatera',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Bitung',
                    province: 'Sulawesi Utara',
                    category: 'Non Klasis',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Buli',
                    province: 'Maluku Utara',
                    category: 'Non Klasis',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Ambon',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Ambon Kota',
                    province: 'Maluku',
                    category: 'Non Klasis',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Pare-pare',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Pare - Pare',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Barru',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Pare - Pare',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Pinrang',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Pare - Pare',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sidrap',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Pare - Pare',
                    link: 'church'
                },
                {
                    title: 'Klasis Makassar Timur',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Piri',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kalian',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Simbuang',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Rongkole',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Tempe'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Sedanan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Benduruk'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Ariang',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tadau Botang',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Awa' Sassan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tanete Borong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Batusapa'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lamunan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Mamullu Makale",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tondok Bangla'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pango Pango",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sangatta',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Bengalon',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Bontang',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kaliorang',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Benp Harapan',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Pengadaan Baru',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Kaubun',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Bontang Kutai Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Balikpapan',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sukaraja',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Gersik',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Batakan',
                    province: 'Kalimantan Selatan',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sotek',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tamiang Bakung',
                    province: 'Kalimantan Selatan',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Satui',
                    province: 'Kalimantan Selatan',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Batu Kajang',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Puruk Cahu',
                    province: 'Kalimantan Tengah',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Cabang Kebaktian Tanah Grogot',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Samboja',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Penajam',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Km 10 Balikpapan',
                    province: 'Kalimantan Timur',
                    category: 'Klasis Balikpapan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Panjo',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Lasampi',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Pandayora',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Londi',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Korowou',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Saemba Walati',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Bahodopi',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kasingoli',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Watu Maeta',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Salukaia',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Palu',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Poso',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Petobo',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sausu',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Manggalapi',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Silampayang',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Napu',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Pandiri',
                    province: 'Sulawesi Tengah',
                    category: 'Klasis Sulawesi Tengah',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kendari',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Lepo-lepo',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Unaaha',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Langgikimia',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Wonggudu',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Cabang Kebaktian Abeli',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Morosi',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI Muna',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kendari Konawe',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Pomalaa',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Longori',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Polenga',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Watalara',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID POS PI. Rahanggada',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID POS PI. Kasipute',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID POS PI. Aneka Marga Bombana',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Watutori',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Cabang Kebaktian Lasusua',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID POS PI. Ladongi',
                    province: 'Sulawesi Tenggara',
                    category: 'Klasis Kolaka Bombana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Wawondula',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sorowaku',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Wasuponda',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Kawasule',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Angkona',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tarabbi',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Ujung Batu',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Landangi',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Lamaeto',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Mahalona',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Walandawe',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Latunrung',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Pos PI. Tanggola',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Timur',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Palopo',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tumale',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Lare-lare',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Padang Sappa',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Batusitanduk',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sukadamai',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat To'Lemo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Paco' Merah",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat To' Pongo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Cabang Kebaktian Labokke’',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Selatan',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Lambara ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Buyuntana ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Maramba ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Cendana Hitam ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Towu-towu ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Maleku ',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Marampa'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Teromu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Taripa",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mangkutana',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Rambakulu',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Tolada',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Teteinduk',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sukaharapan',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Pateai',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Bungapati',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Sadar',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Home Base Mappadeceng',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Marobo',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Cabang Kebaktian Salulimbong',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Luwu Utara',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Salukuse',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Ratte',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Leso',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sa'pang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Makkodo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Cabang Kebaktian langsa'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: 'Gereja KIBAID Jemaat Salukuse',
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bongga Karadeng',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Marondon",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sadipe",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Padangtonik",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tangapadang",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat To'uru",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Salutoding",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bolo'",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sulikan",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Batu",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Pa'buaran",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bittuang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Batukarang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kaulo Balepe'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Ballalambe'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Dama'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Orong Burasia",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Limbong Se'seng",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tungga' Pali",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bolokan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Masanda",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kulaya",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI To' Pangi",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Bittuang',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tabatan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tombang Piappang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sallu Buttu Tondok",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lombok Manik",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sa'Tandung",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tiakka",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kondongan Padaya",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Ulusalu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rantetayo ",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantetayo',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Karondeng ",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantetayo',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tombang Ke'pe ",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantetayo',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Surakan ",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantetayo',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Tandung Kurra ",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantetayo',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Palesan",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Batusura",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lombok Limbong",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Malimbong",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kayuosing",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Longdo Talion",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bone'",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buttulepong",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Petarian",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lambanan",
                    province: 'Sulawesi Selatan',
                    category: "Klasis Rembon Malimbong Balepe'",
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tombang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tokesan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sandale",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Barra-barra",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Gantaran",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Turunan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Songgo Rantealang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sondong Batualu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bassan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Barua",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Wala",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Ballalo'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Sangalla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rantepao",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tambunan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bolu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntao",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Todongkon",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lengkong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kambutu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lengke'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Maindo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Paiman",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Madandan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Tede",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Kamande",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Moungsia",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tonglo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Cabang Kebaktian Loko’",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Rantepao',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Salukarondang",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pangra'ta",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Danggala",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Dulang",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Issong Batu",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bala Lempangan",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat To' Arra'",
                    province: 'Sulawesi Selatan',
                    category: '"Klasis Randan Batu',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Paku Makale",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Panglion",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tanamalia",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Batupapan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sassa",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Tondon Sangbua",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kanan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Ropo'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makale Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Limbong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Mebali",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Salubarani",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Gandang Batu Timur",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rantedada",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Garassik",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Alloan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tokarua",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Datu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Uluway",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tendan Ku'lang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pakala",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Kurin",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Tengah',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Marinding",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Ke'pe",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat To'Sadipe",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Moso",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                 {
                    title: "Gereja KIBAID Jemaat To'Lamba'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kondongan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Ge’tengan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Parigi",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kaluku",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pongno'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sillanan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Baturondon",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bala",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rantebia",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kanaan/Km 5",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Tampo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Gasing",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Gasing Perindingan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pos PI. To'banga",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Mengkendek Barat',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Redak",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Benteng Alla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat LandoKadawang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Benteng Alla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Lepong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Benteng Alla',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Talondo",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kaduaja",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pongdudu",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rambeao'",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tondon Kalean",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Kanunang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pantawanan",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Beang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Gandang Batu Sillanan',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tobadak II",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Funju",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tobadak Tanjung",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Rantekumbiling",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Karossa",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bamba Mone",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pasangkayu",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Salu Bombang",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Popenga",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju Tengah Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Merauke",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Timika",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Jayapura",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Nabire",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Bintuni",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sorong",
                    province: 'Papua Barat',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Wamena",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Manokwari",
                    province: 'Papua Barat',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sentani",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Sarmi",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Cabang Kebaktian Elelim",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Ransiki",
                    province: 'Papua Barat',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Mulia Puncak Jaya",
                    province: 'Papua',
                    category: 'Klasis Papua',
                    link: 'church'
                },
                {
                    title: "Klasis Balikpapan",
                    province: 'Kalimantan Timur',
                    category: 'Klasis',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tanjung Redeb",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Malinau",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Tanjung Selor",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Tarakan",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Nunukan",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Sega",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Kelay",
                    province: 'Kalimantan Utara',
                    category: 'Klasis Berau Kalimantan Utara',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Samarinda",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Harapan Baru",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sangasanga",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bukuan",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bukit Mahkota",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Mangkupalas",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pendingin",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tenggarong Seberang",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Handil",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Gotong Royong",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Pulau Pinang",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sendawar",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Muara Bada'",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Sedulang",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Jembaian Loakulu",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Sebulu",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Cabang Kebaktian Loa Duri",
                    province: 'Kalimantan Timur',
                    category: 'Klasis Samarinda',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Labasang Polewali",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Tamalantik",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Sumarorong",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Mamasa",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Lambanan",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Salu Bulo",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Messawa",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI Nosu",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Aralle",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Polewali Mamasa',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Mamuju",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Buntu Lalong",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Lomban Baraba",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bonehau",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Kakullasan",
                    province: 'Sulawesi Barat',
                    category: 'Klasis Mamuju',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Latimojong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Balang-boddong",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Bara-baraya",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Perumnas",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Batubara Angkatan Laut",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Jemaat Antang",
                    province: 'Sulawesi Selatan',
                    category: 'Klasis Makassar',
                    link: 'church'
                },
                {
                    title: "Gereja KIBAID Pos PI. Halmahera Tengah",
                    province: 'Maluku Utara',
                    category: 'Non Klasis',
                    link: 'church'
                }
                ,
                {
                    title: "Gereja KIBAID Pos PI. Tondano",
                    province: 'Sulawesi Utara',
                    category: 'Non Klasis',
                    link: 'church'
                }


            ],
            select: null,
            items: [
                { province: 'Aceh' },
                { province: 'Sumatera Utara' },
                { province: 'Sumatera Barat' },
                { province: 'Riau' },
                { province: 'Kepulauan Riau' },
                { province: 'Jambi' },
                { province: 'Bengkulu' },
                { province: 'Sumatera Selatan' },
                { province: 'Lampung' },
                { province: 'Bangka Belitung' },
                { province: 'Banten' },
                { province: 'Jawa Barat' },
                { province: 'Jakarta Raya' },
                { province: 'Jawa Tengah' },
                { province: 'Yogyakarta' },
                { province: 'Jawa Timur' },
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
                { province: 'Papua' },
                { province: 'Papua Barat' }
            ],
            overlay: false,
            page: 1,
            pageSize: 6,
            listCount: 0,
            churchArr: [],
            clickedArr: [],
            filterArr: [],
            selectArr: []
        };
    },
    created() {
        this.initPage();
        this.updatePage(this.page);
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
            this.page = 1;
            this.overlay = true;
            setTimeout(() => (this.overlay = false), 900);

            this.clickedLocation = getLocationName(event.target);
            this.select = getLocationName(event.target);

            this.$nextTick(() =>
                document.getElementById('church').scrollIntoView({ behavior: 'smooth' })
            );
            const filterArr = this.churches.filter((e) => e.province === this.clickedLocation).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
            console.log(filterArr);
            this.listCount = filterArr.length;
            if (this.listCount < this.pageSize) {
                this.churchArr = filterArr;
            } else {
                this.churchArr = filterArr.slice(0, this.pageSize);
            }

        },
        onChange(event) {
            this.page = 1;
            console.log(this.select);
            this.overlay = true;
            setTimeout(() => (this.overlay = false), 900);
            this.clickedLocation = this.select;
            this.$nextTick(() =>
                document.getElementById('church').scrollIntoView({ behavior: 'smooth' })
            );
            const selectArr = this.churches.filter((e) => e.province === this.select).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
            console.log(selectArr);
            this.listCount = selectArr.length;
            if (this.listCount < this.pageSize) {
                this.churchArr = selectArr;
            } else {
                this.churchArr = selectArr.slice(0, this.pageSize);
            }
        },
        initPage() {

            if (this.clickedLocation != null) {
                const filterAr = this.churches.filter((e) => e.province === this.clickedLocation).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
                this.listCount = filterAr.length;
                if (this.listCount < this.pageSize) {
                    this.churchArr = this.filterAr;
                } else {
                    this.churchArr = this.filterAr.slice(0, this.pageSize);
                }
            } else if (this.select != null) {
                const selectAr = this.churches.filter((e) => e.province === this.select).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
                this.listCount = selectAr.length;
                if (this.listCount < this.pageSize) {
                    this.churchArr = this.selectAr;
                } else {
                    this.churchArr = this.selectAr.slice(0, this.pageSize);
                }
            } else {
                this.listCount = this.churches.length;
                if (this.listCount < this.pageSize) {
                    this.churchArr = this.churches;
                } else {
                    this.churchArr = this.churches.slice(0, this.pageSize);
                }

            }
        },
        updatePage(pageIndex) {

            if (this.clickedLocation != null) {
                const selectAr = this.churches.filter((e) => e.province === this.clickedLocation).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
                let start = (pageIndex - 1) * this.pageSize;
                let end = pageIndex * this.pageSize;
                this.churchArr = selectAr.slice(start, end);
                this.page = pageIndex;
            } else if (this.select != null) {
                const selectAr = this.churches.filter((e) => e.province === this.select).map((e) => { return { title: e.title, province: e.province, category: e.category, link: e.link } });
                let start = (pageIndex - 1) * this.pageSize;
                let end = pageIndex * this.pageSize;
                this.churchArr = selectAr.slice(start, end);
                this.page = pageIndex;
            } else {
                const selectAr = this.churches;
                let start = (pageIndex - 1) * this.pageSize;
                let end = pageIndex * this.pageSize;
                this.churchArr = selectAr.slice(start, end);
                this.page = pageIndex;
            }
            // console.log(filter2); lolos
            console.log(this.selectAr);
        },
    },
    computed: {
        pages() {
            if (this.pageSize == null || this.listCount == null) return 0;
            return Math.ceil(this.listCount / this.pageSize);
        }
    }
}
</script>