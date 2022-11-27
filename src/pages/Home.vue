<template>
    <div>
        <HomeSectionComp />
        <FaithSectionComp />
        <DonationSectionComp />
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/HomeSection.vue";
import FaithSectionComp from "@/components/FaithSection.vue";
import DonationSectionComp from "@/components/DonationSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        FaithSectionComp,
        DonationSectionComp
    },
};
</script>
<style lang="scss" scoped>

</style>
  

