<template>
    <section id="newsPage">
        <BannerComp title="Tentang Kami" />
        <BreadcrumbComp :list="menu"/>        
        <HistoryComp />                  
        <InfographicSectionComp />       
        <AuthorityComp />
        <FaithSectionComp class="pt-8"/>   
    </section>
</template>
  
<script>
import BannerComp from "@/components/Banner.vue";
import BreadcrumbComp from "@/components/Breadcrumb.vue";
import HistoryComp from "@/components/About/History.vue";
import AuthorityComp from "@/components/About/Authority.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import InfographicSectionComp from "@/components/About/InfographicSection.vue";
export default {
    name: "AboutView",
    components: {
        BannerComp,
        BreadcrumbComp,
        HistoryComp,
        AuthorityComp,
        FaithSectionComp,
        InfographicSectionComp
    },
    data: () => ({
        menu: [
        {
          label: 'Home',
          link: '/home'
        },
        {
          label: 'Tentang Kami',
          link: '/about'
        }
      ],
    }),
    methods: {
    },
    mounted() {
    }
};
</script>
<style lang="scss" scoped>

</style>
  

