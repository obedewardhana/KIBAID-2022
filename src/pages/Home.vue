<template>
    <div>
        <HomeSectionComp />
        <FeedSectionComp />
        <FaithSectionComp />
        <GallerySectionComp :feeds="news" class="pb-8" />
        <InfographicSectionComp class="pt-8" />
        <ChurchSectionComp />
        <DonationSectionComp />
    </div>
</template>
  
<script>
import HomeSectionComp from "@/components/Home/HomeSection.vue";
import FeedSectionComp from "@/components/Feeds/FeedSection.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import GallerySectionComp from "@/components/Gallery/GallerySection.vue";
import ChurchSectionComp from "@/components/Church/ChurchSection.vue";
import InfographicSectionComp from "@/components/About/InfographicSection.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: "HomeView",
    components: {
        HomeSectionComp,
        FeedSectionComp,
        FaithSectionComp,
        GallerySectionComp,
        InfographicSectionComp,
        ChurchSectionComp,
        DonationSectionComp
    },
    data: () => ({
        news: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'informasi',
                date: '22 Agustus 2022'
            },
        ],
    }),
    methods: {
    },
    mounted() {
    }
};
</script>
<style lang="scss" scoped></style>
  

