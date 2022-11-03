<template>
    <v-col md="3" class="navbar text-md-center">
        <v-container>
            <h1>Point system 1.0</h1>
            <h3>name page</h3>
            <nav>
                <v-row>
                    <v-col cols="12">
                        <router-link to="/">
                            <v-btn height="65px" width="100%" style="background:white">Bater ponto</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <router-link to="/personal">
                            <v-btn height="65px" width="100%" style="background:white">Dados pessoais</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <router-link to="/historic">
                            <v-btn height="65px" width="100%" style="background:white">historico</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </nav>
        </v-container>
    </v-col>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style>
    .navbar{
        background-color: #78B2E8;
        padding-top: 50px;
    }
    .navbar h1{
        color: white;
    }
    .navbar h3{
        color: white;
        font-weight: 400;
        margin-bottom: 60px;
    }
</style>