<template>
    <section>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-breadcrumbs divider=">">
                        <v-breadcrumbs-item v-for="(route, idx) in list" :key="idx || route.link || route.label"
                            :to="route.link">
                            {{ route.label }}
                        </v-breadcrumbs-item>
                    </v-breadcrumbs>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'BreadcrumbComp',
    props: {
        list: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>