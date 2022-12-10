<template>
    <div id="churchDetail">
        <ChurchBannerComp :church="local" />
        <FeedPerCategoryComp :feeds="news" class="pb-8" />
        <FaithSectionComp />
        <DonationSectionComp />
    </div>
</template>
<script>
import ChurchBannerComp from "@/components/Church/ChurchBanner.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: 'ChurchDetailView',
    components: {
        ChurchBannerComp,
        FaithSectionComp,
        FeedPerCategoryComp,
        DonationSectionComp
    },
    data: () => ({
        local: [
            {
                src: require('@/assets/video/bg-yogya.mp4'),
                title: 'Gereja KIBAID Jemaat Yogyakarta',
                klasis: 'Klasis Jawa & Sumatera',
                category: 'Gereja',
                address: ''
            }
        ],
        news: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Klasis',
                date: '22 Agustus 2022'
            },
        ],
    })
}
</script>