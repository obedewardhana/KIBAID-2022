<template>
    <section id="churchPage">
        <BannerComp title="Gereja"/>
        <BreadcrumbComp :list="menu"/>
        <ChurchSectionComp />
        <DonationSectionComp />
    </section>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import ChurchSectionComp from "@/components/Church/ChurchSection.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: "ChurchView",
    components: {
        BannerComp,
        BreadcrumbComp,
        ChurchSectionComp,
        DonationSectionComp
    },
    data: () => ({
        menu: [
        {
          label: 'Home',
          link: '/home'
        },
        {
          label: 'Gereja',
          link: '/church'
        }
      ],
    })
};
</script>
<style lang="scss" scoped>

</style>
  

