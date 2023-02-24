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
                src: require('@/assets/video/bg-paku.mp4'),
                poster: require('@/assets/img/img-church1.jpg'),
                title: 'Gereja KIBAID Jemaat Paku',
                klasis: 'Klasis Makale Utara',
                category: 'Gereja',
                address: '',
                periode: '2017 - 2023',
                gembala: [
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Pdt. Aris Randan, M.Div',
                        jabatan: 'Gembala Jemaat I'
                    },
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Pdt. Paulus Taruk Linggi, S.Th',
                        jabatan: 'Gembala Jemaat II'
                    },
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Pdt. Nirmala Dewi Gopalan, S.Th',
                        jabatan: 'Gembala Jemaat III'
                    },
                    {
                        src: require('@/assets/img/img-usermale.jpg'),
                        name: 'Dewi Tanmanlika Yara, S.Fil',
                        jabatan: 'Calon Pekerja'
                    }
                ],
                jemaat: [
                    {
                        icon: 'mdi-account-multiple',
                        name: 'Jumlah KK',
                        amount: '267'
                    },
                    {
                        icon: 'mdi-book-open-page-variant',
                        name: 'Persekutuan Sekolah Minggu',
                        amount: '175'
                    },
                    {
                        icon: 'mdi-human-handsup',
                        name: 'Persekutuan Kaum Muda',
                        amount: '225'
                    },
                    {
                        icon: 'mdi-human-female',
                        name: 'Persekutuan Kaum Wanita',
                        amount: '254'
                    },
                    {
                        icon: 'mdi-human-male',
                        name: 'Persekutuan Kaum Pria',
                        amount: '215'
                    },
                    {
                        icon: 'mdi-account-multiple-plus',
                        name: 'Jumlah Jiwa',
                        amount: '895'
                    }
                ],
                ibadah: [
                    {
                        id: 'ib1',
                        judul: 'Ibadah Umum I Jemaat (Dewasa)',
                        hari: 'Minggu',
                        jam: '06.00 WITA',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib2',
                        judul: 'Ibadah Umum II (Cab. Kebaktian Mandetek)',
                        hari: 'Minggu',
                        jam: '07.00 WITA',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib3',
                        judul: 'Ibadah Umum III Jemaat (Dewasa)',
                        hari: 'Minggu',
                        jam: '09.30 WITA',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib4',
                        judul: 'Ibadah Umum IV Jemaat (Dewasa)',
                        hari: 'Minggu',
                        jam: '17.00 WITA',
                        icon: 'mdi-book-cross'
                    },
                    {
                        id: 'ib5',
                        judul: 'Ibadah Doa Jemaat (Sekolah Minggu/Dewasa)',
                        hari: 'Jumat',
                        jam: '16.00 WITA',
                        icon: 'mdi-book-cross'
                    }
                ],
                location: [
                    {
                        id: 'lk1',
                        nama: 'Gereja kibaid jemaat paku',
                        lokasi: 'Jl.Pongtiku No.5, Makale, Tana Toraja, Sulawesi Selatan 91811',
                        icon: 'mdi-map-marker',
                        maps: 'https://goo.gl/maps/46kZrnJQwDu22C926'
                    },
                    {
                        id: 'lk2',
                        nama: ' kebaktian mandetek',
                        lokasi: 'Jl. Pongtiku No.444, Tambunan, Makale Utara, Tana Toraja, Sulawesi Selatan 91817',
                        icon: 'mdi-map-marker',
                        maps: 'https://goo.gl/maps/kmkrLh9ebv3AfjH2A'
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
                        name: 'PDT. ARIS RANDAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Ketua',
                person: [
                    {
                        id: '2',
                        name: 'PNT. ZADRAK TOMBE',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Sekretaris',
                person: [
                    {
                        id: '3',
                        name: 'PNT. EDY STEVANUS',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Sekretaris',
                person: [
                    {
                        id: '4',
                        name: 'PNT. BERTHYNA ADHERLINE TUKKENG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bendahara',
                person: [
                    {
                        id: '5',
                        name: 'PNT. DORCE LITTA PANGOLI',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Wakil Bendahara',
                person: [
                    {
                        id: '6',
                        name: 'DKN. ORPA SORRENG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PSM',
                person: [
                    {
                        id: '7a',
                        name: 'DKN. NOVIANTY SOMBA',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '7b',
                        name: 'DKN. ELDIANI TOLA',
                        src: require('@/assets/img/img-usermale.jpg')
                    }, {
                        id: '7c',
                        name: 'DKN. YOSEFINA PABEBANG',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKM',
                person: [
                    {
                        id: '8a',
                        name: 'PNT. LENYNDA TONDOK',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '8b',
                        name: 'DKN. SARAH',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '8c',
                        name: 'PNT. RUTH SANY TOMBE',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKW',
                person: [
                    {
                        id: '9',
                        name: 'PNT. ERNI YETTY RIMAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '9a',
                        name: 'PNT. RUTH BELOPANDUNG',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '9b',
                        name: 'PNT. YUSTINA TANGKELANGI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '9c',
                        name: 'PNT. MARTHA SAMPELILING',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang PKP',
                person: [
                    {
                        id: '10a',
                        name: 'PNT. IWANTO SIAPPA',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '10b',
                        name: 'PNT. KAREL PAGAU',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '10c',
                        name: 'PNT. YOS MALLANGI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '10d',
                        name: 'PNT. ELKANA PARERUNGAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Penginjilan',
                person: [
                    {
                        id: '11a',
                        name: 'PDT. NIRMALA DEWI GOPALAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '11b',
                        name: 'PNT. MELIANUS BO’DO',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '11c',
                        name: 'DKN. MIRANDA BOKKO’',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pelayanan Sosial',
                person: [
                    {
                        id: '12a',
                        name: 'DKN. DINA SUMULE TINGGI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '12b',
                        name: 'PNT. PROGUSTINA RANTE ALLO',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '12c',
                        name: 'DKN. ANNE HAYU LESTARI',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pembangunan/Maintenance',
                person: [
                    {
                        id: '13a',
                        name: 'PNT. PAULUS KANNI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '13b',
                        name: 'PNT. SIMON SETEN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '13c',
                        name: 'PNT. MICEL SAMAR PASAK',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pengembangan Paduan Suara',
                person: [
                    {
                        id: '14a',
                        name: 'DKN. DINA KADERAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '14b',
                        name: 'DKN. EODIA MA’TAN',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pelayanan & Multimedia',
                person: [
                    {
                        id: '15a',
                        name: 'PTD. PAULUS TARUK LINGGI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '15b',
                        name: 'DKN. IRNA ALLO RUNDUN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '15c',
                        name: 'DKN. MARIANY SAMPE',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '15d',
                        name: 'PNT. ORLIANTO LINGGI T.',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Humas/Informasi',
                person: [
                    {
                        id: '16a',
                        name: 'PNT. ABNER SUMULE',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '16b',
                        name: 'PNT. YULIANUS THEVY TONDOK',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '16c',
                        name: 'PNT. YAN SALMON',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Pemberdayaan Ekonomi Jemaat',
                person: [
                    {
                        id: '17a',
                        name: 'PNT. RIBKA TOMBE',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '17b',
                        name: 'PNT. MERRY EMBONG PASAK',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '17c',
                        name: 'DKN. ERNI TODING BUA',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Inventaris & Asset Gereja',
                person: [
                    {
                        id: '18a',
                        name: 'PNT. NOMENSEN LILU',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '18b',
                        name: 'DKN. AGUSTINUS MAMAHE',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            },
            {
                tab: 'Bidang Persekutuan Kaum Lansia',
                person: [
                    {
                        id: '20a',
                        name: 'PNT. YOHANA SUMULE TINGGI',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '20b',
                        name: 'DKN. ADRIANA MAPANDIN',
                        src: require('@/assets/img/img-usermale.jpg')
                    },
                    {
                        id: '20c',
                        name: 'PNT. ELIA TOMBE',
                        src: require('@/assets/img/img-usermale.jpg')
                    }
                ]
            }
        ]
    }),
}
</script>