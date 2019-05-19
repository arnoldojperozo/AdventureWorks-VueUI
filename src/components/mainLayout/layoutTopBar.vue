<template>
    <v-toolbar class="grey darken-3 accent-3">
        <v-toolbar-side-icon class="grey darken-3 accent-3 white--text"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text accent-1">AdventureWorks API - Vue UI</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/People" class="flat white--text grey darken-3">People</v-btn>
            <v-btn to="/Orders" class="flat white--text grey darken-3">Orders</v-btn>
            <v-btn to="/Products" class="flat white--text grey darken-3">Products</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "layoutTopBar"
    }
</script>

<style scoped>

</style>
