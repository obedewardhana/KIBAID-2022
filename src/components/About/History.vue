<template>
    <section id="history">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card :elevation="0" color="transparent" class="pt-8 px-3" tile>
                        <v-row>
                            <v-col cols="12" class="px-0">
                                <v-card-title
                                    class="text-h5 font-weight-bold primary--text text-uppercase justify-center text-center mb-5">
                                    SEJARAH KIBAID
                                </v-card-title>
                                <v-card-text class="px-0">
                                    <v-tabs v-model="tab" background-color="secondary" :show-arrows="true" dark>
                                        <v-tab v-for="item in items" :key="item.tab">
                                            <p class="text-small text-uppercase white--text mb-0">{{ item.date }}</p>
                                        </v-tab>
                                    </v-tabs>

                                    <v-tabs-items v-model="tab">
                                        <v-tab-item v-for="item in items" :key="item.tab">
                                            <v-card elevation="0" color="secondary" flat class="pb-5 px-5" tile>
                                                <v-card-text class="px-5 pb-5 bg--white">
                                                    <p class="text-p primary--text text-justify">{{ item.content }}</p>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'HistoryComp',
    data: () => ({
        tab: null,
        items: [
            { tab: '1', date: '4 Juli 1936', content: "Sejarah Gereja KIBAID dimulai pada tanggal 4 Juli 1936, pada waktu siswa-siswi Sekolah Alkitab Makassar (SAM) yang tinggal di Makassar membentuk suatu persekutuan yang diberi nama “Keperloean Indjil Bangsa Toradja” disingkat “KIBAT”. Pada awal terbentuknya persekutuan KIBAT ini hanya terdiri dari tujuh Kepala Keluarga (KK) yaitu Kel. P.Rumpa, Kel. L.Laupa’, Kel. J.Leme’, Kel. R.Bine’, Kel. L.Raru’, Kel. Kunnu’ dan Kel.Tarrapa’. Kebaktian dilaksanakan di rumah L.Laupa’ di Jalan G. Lompobattang Lr.84/15 Makassar. Pada mulanya KIBAT tidak bermaksud mendirikan Gereja karena mereka sudah menjadi anggota Gereja Zending Maros (sekarang Gereja Toraja Jalan G.Bawakaraeng Makassar). Mereka membentuk organisasi masyarakat ini dengan tujuan, memberitakan Injil kepada orang-orang Toraja yang berdomisili di Makassar serta memberikan pembaruan rohani bagi orang Toraja yang sudah Kristen." },
            { tab: '2', date: '17 Agustus 1945', content: 'Persekutuan KIBAT berjalan lancar sampai tahun 1941, tetapi kemudian vakum selama Perang Dunia II tahun 1942-1945, dan selanjutnya baru aktif kembali setelah Kemerdekaan RI tanggal 17 Agustus 1945. Tempat kebaktian pindah dari Jalan G.Lompobattang ke rumah Ibu Maria (tante J.La’lang) di Jalan Sungai Poso Makassar.' },
            { tab: '3', date: '17 Januari 1948', content: "Pada akhir tahun 1947, persekutuan KIBAT di Makassar yang sudah berjalan baik sejak Indonesia merdeka dimana sebelumnya  tidak berniat mendirikan Gereja, tetapi oleh J.R.Dian dan J.La’lang persekutuan KIBAT ini kemudian disepakati untuk dijadikan Gereja dan didukung oleh pengurus dan anggota KIBAT lainnya. Akhirnya pada tanggal 17 Januari 1948 mereka sepakat membentuk Gereja dengan nama “Gereja Kerapatan Indjil Bangsa Toradja” yang disingkat “Gereja KIBAT”. Mereka pun membentuk pengurus yang diketuai oleh J.La’lang dan yang menjadi pelayan adalah J.R.Dian. Pada tanggal 3 Februari 1948 J.R. Dian, Alberthin Mangontan dan kawan-kawan anggota Gereja KIBAT membeli  tanah/rumah sederhana di Gotong-Gotong (Jalan S.Limboto Lr.56/10 Makassar, sekarang Kantor Sinode) dan langsung digunakan sebagai tempat ibadah dan pada bulan Mei 1948 jumlah anggota Gereja KIBAT sudah menjadi 321 orang. Pada bulan Februari 1949 J.R.Dian kembali ke Toraja dan tidak pulang lagi ke Makassar karena beliau sudah diangkat sebagai Kepala Kampung, dan selanjutnya pelayanan Gereja KIBAT di Makassar dilanjutkan oleh J. La’lang." },
            { tab: '4', date: '19 Maret 1948', content: "Selanjutnya J.La’lang mengajak mantan teman-teman sekolahnya di SAM yang sudah berpencar di berbagai tempat di Nusantara untuk bergabung dalam satu Gereja KIBAT, antara lain W.M. Mongan yang sedang menginjil di Borneo, B.Bokko’ di Toraja dan lain-lain. Oleh W.M. Mongan memberikan persyaratan bersedia bergabung asalkan organisasi Gereja KIBAT berbadan hukum dan mempunyai Anggaran Dasar yang sah.  Akhirnya mereka berkumpul di Makassar dan pada tanggal 19 Maret 1948 mereka melaksanakan Rapat Umum untuk menyusun  dan mensahkan Anggaran Dasar Gereja KIBAT yang akan digunakan untuk mendirikan organisasi berbadan hukum." },
            { tab: '5', date: '4 November 1949', content: "Pada tanggal 4 November 1949 Menteri Djustisi Indonesia Timoer mensahkan organisasi Gereja KIBAT sebagai suatu organisasi yang Berbadan Hukum melaluiSurat Keputusan Nomor A.15/1/33 tanggal 4 November 1949. Selanjutnya tanggal 4 November 1949 ditetapkan sebagai permulaan babak baru dalam Sejarah Gereja KIBAT, yang kemudian menjadi Gereja KIBAID (Kerapatan Injil Bangsa Indonesia) melalui Akte Notaris No. 21 tanggal 6 Juni 1980." },
            { tab: '6', date: '16 Desember 1950', content: 'Pada tanggal 16 Desember 1950 Pdt. J.La’lang membeli sebidang tanah di Jalan G.Latimojong No.235 Makassar dan langsung dimulai program pembangunan gedung Gereja KIBAT dan berhasil diselesaikan pada tahun 1957, selanjutnya ibadah pindah dari Gotong-Gotong ke Jalan G.Latimojong Makassar. Sementara itu Gereja KIBAT juga Berkembang di Toraja yang dimulai dari Burake,  dimotori oleh Pdt J.Bokko’ dan kawan-kawan. Selanjutnya Gereja KIBAT (KIBAID) terus berkembang ke daerah-daerah lain di Sulawesi (Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah, Sulawesi Utara, Sulawesi Tenggara), lanjut ke Pulau Kalimantan  (KalimantanTimur, Kalimantan Utara, Kalimantan Tengah),  Maluku, Maluku Utara, Papua, Papua Barat, Pulau Jawa (Jakarta, Bandung, Jogyakarta, Solo, Surabaya), Sumatera (Batam), dan daerah-daerah lain di Indonesia akan terus dijangkau oleh Gereja KIBAID melalui Program Penginjilan dan Pengembangan Gereja.' },
            { tab: '7', date: '24-28 November 1954', content: 'Pada tanggal  24-28 November 1954  Gereja KIBAT (KIBAID) mengadakan Konferensi I di Tambunan (sekarang dinamakan Sidang Sinode Am, SSA) , Konferensi II tahun 1957  masih di Tambunan, Konferensi III di Makassar pada tanggal 27-28 September 1961, dan seterusnya. Pada bulan Juli 2017 saat ini Gereja KIBAID mengadakan  Sidang  Sinode  Am  (SSA) ke XVI Tahun 2017 di Rantepao Toraja Utara. Pertumbuhan jemaat Gereja KIBAID walaupun lambat tetapi tetap eksis dari masa ke masa, dimana pada awal perintisannya tahun 1936 dimulai dari 7 KK, dan pada tahun 1949 anggota Gereja KIBAT di Makassar sudah berjumlah 400 orang, di Pare-Pare 100 orang dan di Burake Toraja 300 orang. Pada tahun 2017 jumlah anggota Gereja KIBAID seluruhnya sudah mencapai 31.132 jiwa, suatu jumlah yang sebenarnya relatif kecil dibanding usianya yang sudah mencapai 81 tahun.' },
            { tab: '8', date: 'Sekarang', content: 'Gereja KIBAID saat ini sudah tersebar di 19 Propinsi dan 66 Kabupaten/Kota, 250 Jemaat (Gereja Lokal),  67 Pos PI dan 33 Klasis, serta 388 orang Gembala (Pendeta, Guru Injil). Diharapkan ke depan pertumbuhan jemaat Gereja KIBAID lebih pesat lagi. Berdasarkan Sejarah Gereja KIBAID, terlihat bahwa latar belakang atau tujuan awalsiswa-siswi Sekolah Alkitab Makassar (SAM)membentuk persekutuan yang diberi nama “Keperloean Indjil Bangsa Toradja (KIBAT)” pada tahun 1936   dan merupakan cikal bakal terbentuknya Gereja KIBAID,  adalah untuk memberitakan  Injil kepada orang-orang Toraja di Makassar yang belum mengenal Kristus dan memberikan pembaruan iman (pembinaan rohani) kepada mereka yang sudah Kristen  pada waktu itu. Atas dasar itulah maka Gereja KIBAID dikategorikan sebagai “Gereja Injili” dengan misi utama “Penginjilan” dan “Penggembalaan”.' }
        ],
    })
}
</script>
