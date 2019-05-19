<template>
    <v-footer grey darken-3 accent-3 height="auto">
        <v-card class="flex" flat tile>
            <v-card-title class="grey darken-3">
                <strong class="subheading white--text">Get connected with us on social networks!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-actions class="blue darken-3 justify-center white--text">&copy;2019 — <strong>AdventureWorks</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "layoutFooter",
        data: () => ({
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        })
    }
</script>

<style scoped>

</style>
