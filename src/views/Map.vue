<template>
    <div class="map">
        Hi
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: this.$route.query.search || '',
      };
    },
    created() {
      if (this.searchQuery) {
        this.fetchData(this.searchQuery);
      }
    },
    methods: {
      fetchData(query) {
        console.log('Fetching data with query:', query);
      },
    },
  };
  </script>
  
  <style>
  
  </style>
  