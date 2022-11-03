<template>
  <v-app>
    <v-row>
      <NavBar/>
      <MainComponet />
    </v-row>
  </v-app>
</template>

<script>
import NavBar from './components/Layout/NavBar.vue';
import MainComponet from './components/Layout/Main.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    MainComponet
  },
  data: () => ({
    //
  }),
}
</script>

<style>
 body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    --overflow: hidden;
  }

  .v-row{
    margin:0;
    padding:0;
  }

  .v-card{
    min-height: 230px;
  }
  
  .btn-principal{
    background:#2290FF; 
    color:#FFF !important;
    max-width: 145px;
  }
</style>