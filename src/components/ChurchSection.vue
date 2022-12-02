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
                            <div class="map-info-item">
                                <p class="text-p mb-0">Pointed location: {{ pointedLocation }}</p>
                            </div>
                            <div class="map-info_item">
                                <p class="text-p mb-0">Focused location: {{ focusedLocation }}</p>
                            </div>
                            <div class="map-info-item">
                                <p class="text-p mb-0">Clicked location: {{ clickedLocation }}</p>
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
			clickedLocation: null
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
			this.clickedLocation = getLocationName(event.target);
			// window.open(URL[event.target.id], '_blank');
		},
    }
}
</script>