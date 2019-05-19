<template>
    <v-container fluid>
        <v-layout justify-space-around>
            <v-flex xs5>
                <div class="title mb-1">ReST - API Sample Application</div>
                <v-layout column>
                    <div class="subheading">SQL Server Demo Database - AdventureWorks</div>
                    <v-img :src="require('@/assets/home/microsoft_sqlserver.png')" />
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "welcomeComponent"
    }
</script>

<style scoped>

</style>
