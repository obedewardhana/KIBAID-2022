<template>
    <div id="churchDetail">
        <ChurchBannerComp :church="local" />
        <FeedPerCategoryComp :feeds="news" class="pb-8" />
        <FaithSectionComp />
        <SOKlasisComp :klasis="local" :items="items"/>
        <DonationSectionComp />
    </div>
</template>
<script>
import ChurchBannerComp from "@/components/Church/ChurchBanner.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import SOKlasisComp from "@/components/Church/SOKlasis.vue";
import SOChurchComp from "@/components/Church/SOChurch.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: 'ChurchDetailView',
    components: {
        ChurchBannerComp,
        FaithSectionComp,
        FeedPerCategoryComp,
        SOKlasisComp,
        DonationSectionComp
    },
    data: () => ({
        local: [
            {
                src: require('@/assets/video/bg-yogya.mp4'),
                poster: require('@/assets/img/img-church1.jpg'),
                title: 'Gereja KIBAID Jemaat Yogyakarta',
                klasis: 'Klasis Jawa & Sumatera',
                category: 'Gereja',
                address: '',
                periode: '2017 - 2022'
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
        items: [
            {
                tab: 'Ketua',
                person: [
                    {
                        id:'1',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Ketua',
                person: [
                    {
                        id:'2',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Sekretaris',
                person: [
                    {
                        id:'3',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Sekretaris',
                person: [
                    {
                        id:'4',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bendahara',
                person: [
                    {
                        id:'5',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            }, {
                tab: 'Bidang PSM',
                person: [
                    {
                        id:'6',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKM',
                person: [
                    {
                        id:'7',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id:'7a',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id:'7b',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id:'7c',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id:'7d',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKW',
                person: [
                    {
                        id:'8',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKP',
                person: [
                    {
                        id:'9',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Penginjilan',
                person: [
                    {
                        id:'10',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pelayanan Sosial',
                person: [
                    {
                        id:'11',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Multimedia',
                person: [
                    {
                        id:'12',
                        name: 'Your name here',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            }
        ]
    }),  
}
</script>