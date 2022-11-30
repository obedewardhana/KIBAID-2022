<template>
    <div>
        <HomeSectionComp />
        <FeedSectionComp />
        <FaithSectionComp />
        <InfographicSectionComp />
        <DonationSectionComp />
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/HomeSection.vue";
import FeedSectionComp from "@/components/FeedSection.vue";
import FaithSectionComp from "@/components/FaithSection.vue";
import InfographicSectionComp from "@/components/InfographicSection.vue";
import DonationSectionComp from "@/components/DonationSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        FeedSectionComp,
        FaithSectionComp,
        InfographicSectionComp,
        DonationSectionComp
    },
};
</script>
<style lang="scss" scoped>

</style>
  

