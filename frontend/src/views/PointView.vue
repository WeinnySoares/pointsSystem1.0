<template>
    <PointComponent />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import PointComponent from '../components/Pages/Point.vue';
  
  export default defineComponent({
    name: 'PointView',
  
    components: {
      PointComponent,
    },
  });
  </script>
  