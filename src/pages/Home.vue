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
import HomeSectionComp from "@/components/HomeSection.vue";
import FeedSectionComp from "@/components/FeedSection.vue";
import FaithSectionComp from "@/components/FaithSection.vue";
import ChurchSectionComp from "@/components/ChurchSection.vue";
import InfographicSectionComp from "@/components/InfographicSection.vue";
import DonationSectionComp from "@/components/DonationSection.vue";
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
};
</script>
<style lang="scss" scoped>

</style>
  

