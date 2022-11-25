<template>
    <div>
        <HomeSectionComp />
        <DonationSectionComp />
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/HomeSection.vue";
import ContactSectionComp from "@/components/ContactSection.vue";
import DonationSectionComp from "@/components/DonationSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        ContactSectionComp,
        DonationSectionComp
    },
};
</script>
<style lang="scss" scoped>

</style>
  

