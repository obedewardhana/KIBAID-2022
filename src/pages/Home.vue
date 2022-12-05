<template>
    <div>
        <HomeSectionComp />
        <FeedSectionComp />
        <FaithSectionComp />
        <InfographicSectionComp />
        <ChurchSectionComp />
        <DonationSectionComp />
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/Home/HomeSection.vue";
import FeedSectionComp from "@/components/Feeds/FeedSection.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import ChurchSectionComp from "@/components/Church/ChurchSection.vue";
import InfographicSectionComp from "@/components/About/InfographicSection.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        FeedSectionComp,
        FaithSectionComp,
        InfographicSectionComp,
        ChurchSectionComp,
        DonationSectionComp
    },
    data: () => ({
        
    }),
    methods: {
    },
    mounted() {
    }
};
</script>
<style lang="scss" scoped>

</style>
  

