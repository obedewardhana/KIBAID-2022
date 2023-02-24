<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" xl="12">
            <v-card :elevation="0" color="transparent" tile class="pb-4 feed-detail" v-for="(feed, idx) in feedd"
                :key="(idx || feed.link || feed.title)">
                <v-card-title>
                    <span class="feed-detail-category mr-2 mb-2">{{ feed.category }}</span>
                    <h5 class="primary--text text-h5 mb-2 font-weight-bold">{{ feed.title }}</h5>
                    <div class="feed-detail-date">
                        <span class="d-flex align-center">
                            <v-icon size="16" class="primary--text mr-2">mdi-account</v-icon>
                            {{ feed.editor }}
                        </span>
                        <span class="d-flex align-center">
                            <v-icon size="16" class="primary--text mr-2">mdi-calendar</v-icon>
                            {{ feed.date }}
                        </span>
                    </div>
                </v-card-title>
                <v-divider class="mx-4 mb-4"></v-divider>
                <v-img height="300" :src="feed.src" :lazy-src="feed.src" aspect-ratio="2" class="mx-4 "></v-img>
                <p class="text-small grayrefuge--text font-italic mx-4 mt-2 mb-8">{{ feed.imgauthor }}</p>
                <v-card-text>
                    <p class="text-p primary--text text-justify">
                        {{ feed.description }}
                    </p>
                </v-card-text>
                <v-card-actions class="bg--gray px-5 py-5 mx-4 rounded d-flex flex-row flex-wrap justify-center">
                    <v-btn elevation="0" color="socialfacebook" class="mr-2 mb-2 mb-lg-0" width="185" dark>
                        <v-icon size="16" class="white--text mr-2">mdi-facebook</v-icon>
                        <ShareNetwork class="white--text text-decoration-none" network="facebook" :url="feed.url"
                            :title="feed.title" :description="feed.description" hashtags="">
                            <span class="text-capitalize">Share on Facebook</span>
                        </ShareNetwork>
                    </v-btn>
                    <v-btn elevation="0" color="socialtwitter" class="mr-2 mb-2 mb-lg-0 ml-0" width="185" dark>
                        <v-icon size="16" class="white--text mr-2">mdi-instagram</v-icon>
                        <ShareNetwork class="white--text text-decoration-none" network="twitter" :url="feed.url"
                            :title="feed.title" :description="feed.description" twitter-user="kibaid">
                            <span class="text-capitalize">Share on Twitter</span>
                        </ShareNetwork>
                    </v-btn>
                    <v-btn elevation="0" color="socialpinterest" class="mr-2 mb-2 mb-lg-0 ml-0" width="185" dark>
                        <v-icon size="16" class="white--text mr-2">mdi-pinterest</v-icon>
                        <ShareNetwork class="white--text text-decoration-none" network="pinterest" :url="feed.url"
                            :title="feed.title" :media="('http://localhost:8080' + feed.src)"
                            :description="feed.description">
                            <span class="text-capitalize">Share on Pinterest</span>
                        </ShareNetwork>
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-card :elevation="0" color="transparent" tile class="pb-4">
                <v-card-title class="text-center text-md-center text-lg-left">
                    <h3 class="primary--text mb-2">informasi terkait</h3>
                </v-card-title>
                <v-card-text>
                    <FeedHorizontalComp :feedspc="news" class="pb-8" />
                </v-card-text>
            </v-card>

            <v-card :elevation="0" color="gray" class="pb-4 mx-4">
                <v-card-title>
                    <h5 class="primary--text mb-2 text-h6 text-md-h5 text-lg-h5 font-weight-bold">Leave us a comment
                    </h5>
                </v-card-title>
                <v-card-text>
                    <form>
                        <div class="row">
                            <div class="col-md-12 py-0">
                                <v-textarea autocomplete="comment" class="d-block mt-2 mb-0 p no-hover"
                                    v-model="comment" placeholder="comment" required outlined
                                    @input="v$.comment.$touch()" @blur="v$.comment.$touch()">
                                </v-textarea>
                                <span class="text-small error-message" v-if="v$.comment.$error"> {{
                                        v$.comment.$errors[0].$message
                                }} </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 py-0">
                                <v-text-field autocomplete="name" class="d-block mt-2 mb-0 p no-hover" v-model="name"
                                    placeholder="name" required outlined @input="v$.name.$touch()"
                                    @blur="v$.name.$touch()">
                                </v-text-field>
                                <span class="text-small error-message" v-if="v$.name.$error"> {{
                                        v$.name.$errors[0].$message
                                }} </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 py-0">
                                <v-text-field autocomplete="email" class="d-block mt-2 mb-0 p no-hover" v-model="email"
                                    placeholder="email" required outlined @input="v$.email.$touch()"
                                    @blur="v$.email.$touch()">
                                </v-text-field>
                                <span class="text-small error-message" v-if="v$.email.$error"> {{
                                        v$.email.$errors[0].$message
                                }} </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 py-0 mb-8 mt-8 d-flex justify-end">
                                <v-btn depressed color="primary" class="text-capitalize" dark @click="submit"
                                    :loading="isBusy">
                                    Send</v-btn>
                            </div>
                        </div>
                    </form>
                </v-card-text>
                <v-card-text class=" py-5 rounded d-flex flex-column justify-flex-start overflow-auto"
                    style='height:240px;'>
                    <v-list-item class="bg--white rounded mb-3 comment-box" two-line v-for="(com, idx) in comments"
                        :key="(idx)">
                        <v-list-item-content>
                            <v-list-item-title>
                                <p class="primary--text font-weight-bold mb-0">{{ com.name }}</p>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <p class="primary--text mb-0">{{ com.content }}</p>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

import { useVuelidate } from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import FeedHorizontalComp from "./FeedHorizontal.vue";
import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);

export default {
    name: 'FeedDetailComp',
    components: {
        FeedHorizontalComp
    },
    props: {
        feedd: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data: () => ({
        comment: "",
        comments: [
            {
                name: 'Mariana',
                content: 'Konten yang sangat bermanfaat!'
            },
            {
                name: 'Tori Kalla',
                content: 'Terus bertumbuh dalam iman!'
            },
            {
                name: 'Chelsea',
                content: 'Tolong tambahkan ayat pendukung.'
            },
            {
                name: 'Martin',
                content: 'Sip!.'
            }
        ],
        news: [
            {
                src: require('@/assets/img/img-pray1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1',
                link: '',
                description: 'This is the short description for the card purpose.',
                category: 'Renungan hari ini',
                date: '22 Agustus 2022'
            },
            {
                src: require('@/assets/img/img-worship1.jpg'),
                title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 2',
                link: '',
                description: 'This is the short description for the card purpose.',
                category: 'Renungan hari ini',
                date: '22 Agustus 2022'
            }
        ],
        email: "",
        name: "",
        isBusy: false,
        alert: {
            Visible: "",
            Message: "",
        }
    }),
    validations: {
        comment: {
            required: helpers.withMessage('Komentar harus diisi.', required)
        },
        name: {
            required: helpers.withMessage('Nama harus diisi.', required)
        },
        email: {
            required: helpers.withMessage('Email harus diisi.', required),
            email: helpers.withMessage('email harus valid.', email)
        },
    },
    methods: {
        submit() {
            this.isBusy = true;
            this.v$.$touch();
            if (this.v$.$invalid) {
                this.isBusy = false;
                console.log("err");
            } else {
                // this.auth();
                this.$router.replace("Dashboard");
                console.log("submit");
            }
        }
    }
}
</script>