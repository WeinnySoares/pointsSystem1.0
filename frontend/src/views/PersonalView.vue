<template>
    <PersonalComponent />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import PersonalComponent from '../components/Pages/Personal.vue';
  
  export default defineComponent({
    name: 'PersonalView',
  
    components: {
      PersonalComponent,
    },
  });
  </script>
  