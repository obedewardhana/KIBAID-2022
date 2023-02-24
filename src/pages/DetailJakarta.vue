<template>
    <div id="churchDetail">
        <ChurchBannerComp :church="local" />
        <FeedPerCategoryComp :feeds="news" class="pb-8" />
        <FaithSectionComp />
        <SOKlasisComp :klasis="local" :items="items" />
        <SOChurchComp :locals="local" />
        <ScheduleComp :locals="local" />
        <DonationSectionComp />
    </div>
</template>
<script>
import ChurchBannerComp from "@/components/Church/ChurchBanner.vue";
import FaithSectionComp from "@/components/About/FaithSection.vue";
import FeedPerCategoryComp from "@/components/Feeds/FeedPerCategory.vue";
import SOKlasisComp from "@/components/Church/SOKlasis.vue";
import SOChurchComp from "@/components/Church/SOChurch.vue";
import ScheduleComp from "@/components/Church/Schedule.vue";
import DonationSectionComp from "@/components/Donation/DonationSection.vue";
export default {
    name: 'DetailPakuView',
    components: {
        ChurchBannerComp,
        FaithSectionComp,
        FeedPerCategoryComp,
        SOKlasisComp,
        SOChurchComp,
        ScheduleComp,
        DonationSectionComp
    },
    data: () => ({
        local: [
            {
                src: require('@/assets/video/bg-jkt.mp4'),
                poster: require('@/assets/img/img-church1.jpg'),
                title: 'Gereja KIBAID Jemaat Jakarta',
                klasis: 'Klasis Makale Utara',
                category: 'Gereja',
                address: '',
                periode: '2017 - 2023',
                gembala: [
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Pdt. Yusuf Paliling, M.Div',
                        jabatan: 'Gembala Jemaat I'
                    },
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Pdt. Dan, S.Th',
                        jabatan: 'Gembala Jemaat II'
                    },
                ],
                jemaat: [
                    {
                        icon: 'mdi-account-multiple',
                        name: 'Jumlah KK',
                        amount: '47'
                    },
                    {
                        icon: 'mdi-book-open-page-variant',
                        name: 'Persekutuan Sekolah Minggu',
                        amount: '33'
                    },
                    {
                        icon: 'mdi-human-handsup',
                        name: 'Persekutuan Kaum Muda',
                        amount: '78'
                    },
                    {
                        icon: 'mdi-human-female',
                        name: 'Persekutuan Kaum Wanita',
                        amount: '52'
                    },
                    {
                        icon: 'mdi-human-male',
                        name: 'Persekutuan Kaum Pria',
                        amount: '45'
                    },
                    {
                        icon: 'mdi-account-multiple-plus',
                        name: 'Jumlah Jiwa',
                        amount: '199'
                    }
                ],
                ibadah: [
                    {
                        id: 'ib1',
                        judul: 'Ibadah Umum I Jemaat ',
                        hari: 'Minggu',
                        jam: '07.00 WIB',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib2',
                        judul: 'Ibadah Umum II',
                        hari: 'Minggu',
                        jam: '09.30 WIB',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib3',
                        judul: 'Ibadah Doa Jemaat (Sekolah Minggu & Dewasa)',
                        hari: 'Minggu',
                        jam: '19.00 WIB',
                        icon: 'mdi-book-cross'
                    }
                ],
                location: [
                    {
                        id: 'lk1',
                        nama: 'Gereja kibaid jemaat jakarta',
                        lokasi: 'Jl.Dukuh Barat No. 1ABC, Lagoa, Tanjung Priok, Jakarta Utara',
                        icon: 'mdi-map-marker',
                        maps: 'https://maps.app.goo.gl/jpNRQHRmnJnsJASf9'
                    }
                ]
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
                link: 'download/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Download',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship2.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 3',
                link: 'news/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Renungan Hari Ini',
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
                link: 'download/detail',
                description: 'This is the short description for the card purpose.',
                category: 'Download',
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
                category: 'Renungan Hari Ini',
                date: '22 Agustus 2022'
            },
        ],
        items: [
            {
                tab: 'Ketua',
                person: [
                    {
                        id: '1',
                        name: 'PDT. YUSUF PALILING,M.Div',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Ketua',
                person: [
                    {
                        id: '2',
                        name: 'PNT. HERSON BALA GALUGU',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Sekretaris',
                person: [
                    {
                        id: '3',
                        name: 'PDT. DAN,M.Th',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Sekretaris',
                person: [
                    {
                        id: '4',
                        name: 'PNT. ZWINGLI TUKKENG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bendahara',
                person: [
                    {
                        id: '5',
                        name: 'PNT. MERI MONGAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'BPPJ',
                person: [
                    {
                        id: '6',
                        name: 'PNT. ZWINGLI TUKKENG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Ibadah & HBG',
                person: [
                    {
                        id: '7a',
                        name: 'PNT. ANDHYNI ERIEL TOMBE',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '7b',
                        name: 'PNT.YAKOBA SAMBOLAYUK',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Penginjilan',
                person: [
                    {
                        id: '8a',
                        name: 'PDT. V. RADY TADUNG',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '8b',
                        name: 'PNT. EVA LAGA',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Sarana & Prasarana',
                person: [
                    {
                        id: '9',
                        name: 'PNT. NEHEMIA A.BATARA',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '9a',
                        name: 'DKN. MATIUS TANGKE DATU',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '9b',
                        name: 'DKN. HERMIN ENNI',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Sosial',
                person: [
                    {
                        id: '10a',
                        name: 'DKN. NOVITA T.TANDIRERUNG',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '10b',
                        name: 'DKN. AGUSTIN MANGNGA',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '10c',
                        name: 'DKN. DAMARIS LINTIN',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pengembangan & Pemberdayaan Jemaat',
                person: [
                    {
                        id: '11a',
                        name: 'PNT. PRIYANI GANEVI TANDIRERUNG',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '11b',
                        name: 'DKN. HERMIN ENNI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '11c',
                        name: 'PDT. DAN, M.Th’',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Multimedia',
                person: [
                    {
                        id: '12a',
                        name: 'DKN. CHRISTANTO E.MONGAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '12b',
                        name: 'DKN. IVON NURNINGSIH',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Kesenian & Musik Gerejawi',
                person: [
                    {
                        id: '13a',
                        name: 'PNT. EBEN HEAZER',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '13b',
                        name: 'DKN. IVON NURNINGSIH',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PSM',
                person: [
                    {
                        id: '14a',
                        name: 'PNT. IMELDA ERNA JAYA TATO',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKM',
                person: [
                    {
                        id: '15a',
                        name: 'PNT. V.RADY TADUNG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKW',
                person: [
                    {
                        id: '16a',
                        name: 'PNT. M.ESTI KARA',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKP',
                person: [
                    {
                        id: '17a',
                        name: 'DKN. MATIUS TANGKE DATU',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                ]
            },
            {
                tab: 'Bidang Pembangunan/Maintenance',
                person: [
                    {
                        id: '18a',
                        name: 'PNT. PAULUS KANNI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '18b',
                        name: 'PNT. SIMON SETEN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '18c',
                        name: 'PNT. MICEL SAMAR PASAK',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            }
        ]
    }),
}
</script>