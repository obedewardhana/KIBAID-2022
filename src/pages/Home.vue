<template>
    <div>
        <HomeSectionComp />
        <!-- <ContactSectionComp /> -->
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/HomeSection.vue";
import ContactSectionComp from "@/components/ContactSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        ContactSectionComp
    },
};
</script>
<style lang="scss" scoped>

</style>
  

