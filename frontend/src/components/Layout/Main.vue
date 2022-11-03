<template>
    <v-main class="main" >
        <v-container class="container">
            <router-view/>
        </v-container>
    </v-main>
</template>

<script>
export default {
        name:'MainComponet'
    }
</script>

<style>
.main{
    background-color: #E3E3E3;
    height: 100vh;
    padding-top: 50px;
    padding-bottom: 40px;
}
.main .container{
    display: flex !important;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
}
</style>