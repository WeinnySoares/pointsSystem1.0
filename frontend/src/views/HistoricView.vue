<template>
    <HistoricComponent />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import HistoricComponent from '../components/Pages/Historic.vue';
  
  export default defineComponent({
    name: 'HistoricView',
  
    components: {
      HistoricComponent,
    },
  });
  </script>
  